import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


//FC

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Encuentra Los Mejores Gifs']);
    

    return( 
          <>
              <h2>GifExpertApp</h2>
              <AddCategory setCategories={ setCategories} />
              <hr />

                  <ol>
                        {
                            categories.map( categories => (
                                <GifGrid
                                     key= {categories}
                                     category= {categories}
                                />
                            ))
                        }
                  </ol>
              
           </>
                     )
                    }


export default GifExpertApp;