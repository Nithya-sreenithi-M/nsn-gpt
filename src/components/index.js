export {default as Article} from './article/Article'
export {default as Brand} from './brand/Brand'
export {default as Calltoaction } from './calltoaction/Calltoaction'
export {default as Feature } from './feature/Feature'
export {default as Navbar} from './navbar/Navbar'

//check the app.js to know the benefits of exporting components like this

/*

Instead of writing the 5 statement in app.js 

import { Article} from './components/article/Article'
import{Brand} from './components/brand/Brand'
import {Calltoaction } from './components/calltoaction/Calltoaction'
import {Feature } from './components/feature/Feature'
import {Navbar} from './components/navbar/Navbar' 

we can just use

import {Article,Brand,Feature} from './components';

Above import statement will import the files from /components/index.js.
This is helpful when multiple files need all 5 imports.
*/