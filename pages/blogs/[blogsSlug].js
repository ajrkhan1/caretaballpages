import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import moment from "moment"

/* =========================
   SERVER SIDE PROPS
========================= */
export async function getServerSideProps(context) {
  try {
    const posturl = context.params.blogsSlug

    const [postRes, recentRes, catedata] = await Promise.all([
      fetch(
        `https://admin.caretab.ai/wp-json/wp/v2/posts?slug=${posturl}&_embed`
      ),
      fetch(
        "https://admin.caretab.ai/wp-json/wp/v2/posts?_embed&categories_exclude=8&per_page=10"
      ),
      fetch(
        "https://admin.caretab.ai/wp-json/wp/v2/categories"
      ),
    ])

    const postData = await postRes.json()
    const recentData = await recentRes.json()
    const CatData = await catedata.json()

    if (!postData || postData.length === 0) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        posts: postData[0],
        posts5: recentData || [],
        cat: CatData || [],
      },
    }
  } catch (error) {
    console.log("SERVER ERROR:", error)

    return {
      notFound: true,
    }
  }
}

/* =========================
   COMPONENT
========================= */
const SingleBlog = ({ posts, posts5, cat }) => {
  return (
    <>
      <Head>
        <title>
          {posts?.title?.rendered || "Blog"} - Curewith3D
        </title>

        <meta
          name="description"
          content={
            posts?.yoast_head_json?.og_description ||
            "Curewith3D Blog"
          }
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
<main class="main">
      <div class="site-breadcrumb blogbanner">
            <div class="container">
                <h2 class="breadcrumb-title">Our Blog</h2>
                <ul class="breadcrumb-menu">
                    <li><a href="/">Home</a></li>
                    <li class="active">Our Blog</li>
                </ul>
            </div>
        </div>

        <div class="blog-single py-120">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-8">
                        <div class="blog-single-wrap">
                            <div class="blog-single-content">
                                <div class="blog-thumb-img">
                                    <Image
                            src={
                              posts?.yoast_head_json?.og_image?.[0]
                                ?.url || "/placeholder.jpg"
                            }
                            alt={
                              posts?.title?.rendered ||
                              "Blog Image"
                            }
                            width={1000}
                            height={500}
                            className="ajimgfull"
                            priority
                          />
                                </div>
                                <div class="blog-info">
                                    <div class="blog-meta">
                                        <div class="blog-meta-left">
                                            <ul>
                                                <li><i class="far fa-user"></i><a href="#">{posts.yoast_head_json.author}</a></li>
                                                <li><i class="far fa-clock"></i>{new Date(
                                  posts.date
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "2-digit",
                                  year: "numeric",
                                })}</li>
                                            </ul>
                                        </div>
                                        {/* <div class="blog-meta-right">
                                             <a href="#" class="share-link"><i class="far fa-share-alt"></i>Share</a>
                                        </div> */}
                                    </div>
                                    <div class="blog-details">
                                        <h3 class="blog-details-title mb-20">{posts?.title?.rendered}</h3>
                                      <div dangerouslySetInnerHTML={{
                            __html:
                              posts?.content?.rendered || "",
                          }}></div>

                                        <div class="row">
                                            <div class="col-md-6 mb-20">
                                                <img src="assets/img/blog/01.jpg" alt=""/>
                                            </div>
                                            <div class="col-md-6 mb-20">
                                                <img src="assets/img/blog/02.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <hr/>								
                                    </div>
                                    <div class="blog-author">
                                        <div class="blog-author-img">
                                            <img src="/assets/img/blog/author.jpg" alt=""/>
                                        </div>
                                        <div class="author-info">
                                            <h6>Author</h6>
                                            <h3 class="author-name">{posts.yoast_head_json.author}</h3>
                                            <p>It is a long established fact that a reader will be distracted by the abcd readable content of a page when looking at its layout  that more less.</p>
                                            <div class="author-social">
                                                <a href="https://www.facebook.com/CareTab"><i class="fab fa-facebook-f"></i></a>
                                                <a href="https://www.instagram.com/caretab.ai/"><i class="fab fa-instagram"></i></a>
                                                <a href="https://www.linkedin.com/company/108111134"><i class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <aside class="blog-sidebar">
                            <div class="widget category">
                                <h5 class="widget-title">Category</h5>
                                <div class="category-list">
                                  {cat?.map((cats) => (
                                    <a href="#"><i class="far fa-arrow-right"></i>{cats.name}<span></span></a>                          
                                    ))}
                                </div>
                            </div>

                      
                            <div class="widget recent-post">
                                <h5 class="widget-title">Recent Post</h5>
                              {posts5?.map((post) => (
                                <div class="recent-post-item">
                                    <div class="recent-post-img">
                                        <Image
                              src={
                                post?.yoast_head_json?.og_image?.[0]
                                  ?.url || "/placeholder.jpg"
                              }
                              alt={
                                post?.title?.rendered ||
                                "Recent Blog"
                              }
                              width={150}
                              height={100}
                              className="img-fluid"
                              loading="lazy"
                            />
                                    </div>
                                    <div class="recent-post-info">
                                        <h6><a href={`/blog/${post.slug}`} >
                                        {post?.title?.rendered}</a></h6>
                                        <span><i class="far fa-clock"></i> {moment(post?.date).format(
                                "MMMM DD YYYY"
                              )}</span>
                                    </div>
                                </div>
                               ))}
                            </div>

                        
                            <div class="widget social">
                                <h5 class="widget-title">Follow Us</h5>
                                <div class="social-link">
                                    <a href="https://www.facebook.com/CareTab"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/caretab.ai/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/company/108111134"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </div>

      </main>
    </>
  )
}

export default SingleBlog