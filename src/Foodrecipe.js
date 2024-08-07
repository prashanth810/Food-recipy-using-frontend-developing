import React, { useEffect, useState } from 'react'
import Products from './Products';

const Foodrecipe = () => {
    const [serach, setSearch] = useState('');
    const [data, setData] = useState([]);

    const YOUR_APP_ID = "b8c34a9c";
    const YOUR_APP_KEY = "a1f331c552e4f9ada830258cc7a96f4c";

    const submitform = (e) => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${serach}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
            .then((resp) => resp.json())
            .then((res) => setData(res.hits))
        // console.log(res.hits)
    }
    const remove = () => {
        setSearch('');
    }

    return (
        <div className='text-center'>

            <div className='mt-4'>
                <h3>Food-Recipe App</h3>
                <p><span className='text-danger'> Note :</span> Search directly you can get all the product's </p>

                <form onSubmit={submitform} >
                    <input type='text' className='w-25 p-2 rounded' value={serach} onChange={(e) => setSearch(e.target.value)} placeholder='Enter Any Food Items....' />

                    {serach.length > 0 ? (
                        <button className='btn btn-outline-danger mx-1 py-2' onClick={remove}>X</button>
                    ) : ("")}

                    <button className='btn btn-outline-success py-2'>Search</button>
                </form>

            </div>

            <div className='container'>
                <div className='row'>
                    {
                        data.map((post, i) => {
                            return (
                                <div className='col-md-4' key={i}>
                                    {/* <h2>{i + 1}</h2> */}
                                    <div className='card my-3' style={{ "width": "22rem" }}>
                                        <img src={post.recipe.image} className='card-img-top p-3' alt='card image top' />

                                        <div className='card-body '>
                                            <h5 className='card-title'>{post.recipe.label}</h5>
                                            <p className='card-text text-primary fw-bold'>Total Amount Of Calories : {Math.round(post.recipe.calories)}</p>
                                            <button className='btn btn-outline-success'>Buy Now</button>
                                        </div>
                                    </div>

                                </div>


                            )
                        })
                    }
                </div>
            </div>

            {/* <img src='https://themewagon.github.io/feane/images/hero-bg.jpg' className='w-100'/> */}


        </div>
    )
}

export default Foodrecipe
