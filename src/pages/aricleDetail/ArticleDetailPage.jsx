import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumps from "../../components/BreadCrumps";
import { images } from "../../constant";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";

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
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start" >
        <article className="flex-1">
          <BreadCrumps data={breadCrumpsDate} />
          <img
            className="rounded-xl w-full"
            src={images.PostImage}
            alt="laptop"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help the children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div>
          <CommentsContainer classname="mt-10"/>
        </article>
        <SuggestedPosts
          header="Latest Article"
          posts={postData}
          tags={tagData}
          className="mt-8 lg:mt-0 max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
