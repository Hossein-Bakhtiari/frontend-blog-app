import React, { useEffect, useState } from "react";
import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import parse from "html-react-parser";

import MainLayout from "../../components/MainLayout";
import BreadCrumps from "../../components/BreadCrumps";
import { images, stables } from "../../constant";
import { Link, useParams } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";
import { useQuery } from "@tanstack/react-query";
import { getAllPost, getSinglePost } from "../../services/index/posts";
import { useSelector } from "react-redux";


const breadCrumpsDate = [
  { name: "Home", Link: "/" },
  { name: "Blog", Link: "/blog" },
  { name: "Article title", Link: "/blog/1" },
];

const postData = [
  {
    _id: "1",
    image: images.PostImage,
    title: "Help children get better education",
    createdAt: "2023-01-28TBT15:35:35.607+0000",
  },
  {
    _id: "2",
    image: images.PostImage,
    title: "Help children get better education",
    createdAt: "2023-01-28TBT15:35:35.607+0000",
  },
  {
    _id: "3",
    image: images.PostImage,
    title: "Help children get better education",
    createdAt: "2023-01-28TBT15:35:35.607+0000",
  },
  {
    _id: "4",
    image: images.PostImage,
    title: "Help children get better education",
    createdAt: "2023-01-28TBT15:35:35.607+0000",
  },
];

const tagData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);

  // const { data, isLoading, isError } = useQuery({
  //   queryFn: () => getSinglePost({ slug }),
  //   queryKey: ["blog", slug],
  //   onSuccess: (data) => {
  //     setbreadCrumbsData([
  //       { name: "Home", link: "/" },
  //       { name: "Blog", link: "/blog" },
  //       { name: "Article title", link: `/blog/${data.slug}` },
  //     ]);
  //     console.log("hello world")
  //     setBody(
  //       parse(
  //         generateHTML(data?.body, [Bold, Italic, Document, Text, Paragraph])
  //       )
  //     );
  //     console.log("hello world")
  //     // console.log(body)
  //     // console.log(generateHTML(data?.body, [Bold, Italic, Document, Text, Paragraph]))
  //     // setBody(parseJsonToHtml(data?.body));
  //   },
  // });
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
  });
  
  useEffect(() => {
    if (data) {
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: data.title || "Article title", link: `/blog/${data.slug}` },
      ]);
      
      console.log("hello world");
  
      setBody(
        parse(
          generateHTML(data?.body, [Bold, Italic, Document, Text, Paragraph])
        )
      );
  
      console.log("hello world");
    }
  }, [data]); // اینجا وابستگی روی `data` گذاشتیم که فقط بعد از تغییر `data` اجرا بشه
  
  const { data: postsData } = useQuery({
    queryFn: () => getAllPost(),
    queryKey: ["posts"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumps data={breadCrumpsDate} />
          <img
            className="rounded-xl w-full"
            src={
              data?.photo
                ? stables.UPLOAD_FOLDER_BASE_URL | data?.photo
                : images.samplePostImage
            }
            alt={data?.title}
          />
          <div className="mt-4 flex gap-2">
            {data?.categories.map((category) => (
              <Link
                to={`/blog?category=${category.name}`}
                className="text-primary text-sm font-roboto inline-block md:text-base"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            {data?.title}
          </h1>
          <div className="mt-4 prose prose-sm sm:prose-base ">{body}</div>
          <CommentsContainer classname="mt-10" logginedUserId="a" />
        </article>
        <div>
          <SuggestedPosts
            header="Latest Article"
            posts={postData}
            tags={tagData}
            className="mt-8 lg:mt-0 max-w-xs"
          />
          <div className="mt-7">
            <h2 className="font-roboto font-medium text-dark-hard mb-4 text-xl">
              Share on:
            </h2>
            <SocialShareButtons
              url={encodeURI("https://github.com/Hossein-Bakhtiari")}
              title={encodeURIComponent("My Github")}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;

