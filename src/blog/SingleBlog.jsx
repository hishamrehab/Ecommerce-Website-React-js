import React from 'react'
import { useState } from 'react'
import blogList from '../../public/utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/pageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';
const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();
    const result = blog.filter((b) => b.id === Number(id));

    const socialList = [
        { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', },
        { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', },
        { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', },
        { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', },
        { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', },
    ]

    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className='container'>
                    <div className='d-flex row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='section-wrapper'>
                                    <div className='row row-cols-1 justify-content-center g-4'>
                                        <div className='col'>
                                            <div className='post-item style-2'>
                                                <div className='post-inner'>
                                                    {result.map((item) => (
                                                        <div key={item.id}>
                                                            <div className='post-thumb'>
                                                                <img src={item.imgUrl} alt='' className='w-100' />
                                                            </div>
                                                            <div className='post-content'>
                                                                <h3>{item.title}</h3>
                                                                <div className='meta-post'>
                                                                    <ul className='lab-ul'>
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </ul>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sunt! Explicabo quod consectetur, porro minus eius magnam dolores. Tempora alias earum ex maiores fuga, eaque laudantium perspiciatis blanditiis magni tenetur.</p>
                                                                <blockquote>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea dolorem aperiam rem dignissimos, quibusdam soluta. Vero officiis saepe, voluptates eligendi quaerat cupiditate. Nisi aspernatur repellat autem voluptatem recusandae ab!</p>
                                                                    <cite>
                                                                        <a href='#'>...Melissa Hunter</a>
                                                                    </cite>
                                                                </blockquote>
                                                                <p>
                                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic facilis unde deserunt deleniti natus voluptas quos, architecto nihil, delectus magnam atque aliquid voluptates illum velit, totam odit culpa rem vero!
                                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic facilis unde deserunt deleniti natus voluptas quos, architecto nihil, delectus magnam atque aliquid voluptates illum velit, totam odit culpa rem vero!
                                                                </p>
                                                                <img src="/src/assets/images/blog/single/01.jpg" alt='' />
                                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur modi cumque ea suscipit obcaecati numquam officiis adipisci ducimus doloremque aperiam dolorum omnis, perspiciatis, dolores voluptates alias ad soluta commodi tenetur!lore
                                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur modi cumque ea suscipit obcaecati numquam officiis adipisci ducimus doloremque aperiam dolorum omnis, perspiciatis, dolores voluptates alias ad soluta commodi tenetur!lore
                                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur modi cumque ea suscipit obcaecati numquam officiis adipisci ducimus doloremque aperiam dolorum omnis, perspiciatis, dolores voluptates alias ad soluta commodi tenetur!lore
                                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur modi cumque ea suscipit obcaecati numquam officiis adipisci ducimus doloremque aperiam dolorum omnis, perspiciatis, dolores voluptates alias ad soluta commodi tenetur!lore</p>
                                                                <div className='video-thumb'>
                                                                    <img src='/src/assets/images/blog/single/02.jpg' alt='' />
                                                                    <a href='https://youtu.be/313GvO3pScc?t=6' className='video-button popup' target='_blank'>
                                                                        <i className='icofont-ui-play'></i></a>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro dolore eaque libero sit dolores esse nihil architecto mollitia tempora illo quae quas facilis, ducimus rem delectus, perferendis amet voluptatem.
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro dolore eaque libero sit dolores esse nihil architecto mollitia tempora illo quae quas facilis, ducimus rem delectus, perferendis amet voluptatem.</p>
                                                                <div className='tags-section'>
                                                                    <ul className='tags lab-ul'>
                                                                        <li href="#"><a href='#'>Agency</a></li>
                                                                        <li href="#"><a href='#'>Business</a></li>
                                                                        <li href="#"><a href='#'>Personal</a></li>
                                                                    </ul>
                                                                    <ul className='lab-ul social-icons'>
                                                                        {
                                                                            socialList.map((val, i) => (
                                                                                <li key={i}>
                                                                                    <a href='#' className={val.className}>
                                                                                        <i className={val.iconName}></i>
                                                                                    </a>
                                                                                </li>
                                                                            )

                                                                            )
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='navigations-part'>
                                                <div className='left'>
                                                    <a href='#' className='prev'>
                                                        <i className='icofont-double-left'></i> Previous Blog
                                                    </a>
                                                    <a href='#' className='title'>
                                                        Evisulate Parallel Processes via Technics Sound Models Authortitative
                                                    </a>
                                                </div>
                                                <div className='right'>
                                                    <a href='#' className='prev'>
                                                        Next Blog <i className='icofont-double-right'></i>
                                                    </a>
                                                    <a href='#' className='title'>
                                                        Evisulate Parallel Processes via Technics Sound Models Authortitative
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleBlog