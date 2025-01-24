import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumps from '../../components/BreadCrumps'

const breadCrumpsDate = [
    {name: "Home" , Link: "/"},
    {name: "Blog" , Link: "/blog"},
    {name: "Article title" , Link: "/blog/1"},

]

const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5'>
            <article className='flex-1'>
                <BreadCrumps data={breadCrumpsDate} />
            </article>
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage