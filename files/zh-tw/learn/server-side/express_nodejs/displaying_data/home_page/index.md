---
title: 主頁
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Home_page
---

我們創建的第一個頁面，是網站的主頁面，可以從網站的根目錄 (`'/'`) ，或者 catalog 的根目錄 (`catalog/`) 訪問。這將呈現一些網站的靜態文字描述，以及動態計算數據庫中不同記錄類型的“計數”。

我們已經為主頁創建了一個路由。為了完成頁面，我們需要更新控制器函數，以從數據庫中提取記錄的“計數”，並創建一個可用於呈現頁面的視圖（模板）。

## 路由

在[前面的教程](/zh-TW/docs/Learn/Server-side/Express_Nodejs/routes)，我們創建 index 頁面路由。此處要提醒的是，所有的路由函式，都定義在 **/routes/catalog.js**:

```js
// GET catalog home page.
router.get('/', book_controller.index);  //This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Where the callback function parameter (`book_controller.index`) is defined in **/controllers/bookController.js**:

```js
exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
}
```

It is this controller function that we extend to get information from our models and then render it using a template (view).

## Controller

The index controller function needs to fetch information about how many `Book`, `BookInstance`, available `BookInstance`, `Author`, and `Genre` records we have in the database, render this data in a template to create an HTML page, and then return it in an HTTP response.

> **備註：** We use the [`countDocuments()`](http://mongoosejs.com/docs/api.html#model_Model.countDocuments) method to get the number of instances of each model. This is called on a model with an optional set of conditions to match against in the first argument and a callback in the second argument (as discussed in [Using a Database (with Mongoose)](/zh-TW/docs/Learn/Server-side/Express_Nodejs/mongoose), and you can also return a `Query` and then execute it with a callback later. The callback will be returned when the database returns the count, with an error value (or `null`) as the first parameter and the count of records (or null if there was an error) as the second parameter.
>
> ```js
> SomeModel.countDocuments({ a_model_field: 'match_value' }, function (err, count) {
>  // ... do something if there is an err
>  // ... do something with the count if there was no error
>  });
> ```

Open **/controllers/bookController.js**. Near the top of the file you should see the exported `index()` function.

```python
var Book = require('../models/book')

exports.index = function(req, res, next) {
 res.send('NOT IMPLEMENTED: Site Home Page');
}
```

Replace all the code above with the following code fragment. The first thing this does is import (`require()`) all the models (highlighted in bold). We need to do this because we'll be using them to get our counts of records. It then imports the _async_ module.

```js
var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};
```

The `async.parallel()` method is passed an object with functions for getting the counts for each of our models. These functions are all started at the same time. When all of them have completed the final callback is invoked with the counts in the results parameter (or an error).

On success the callback function calls [`res.render()`](http://expressjs.com/en/4x/api.html#res.render), specifying a view (template) named '**index**' and an object containing the data that is to be inserted into it (this includes the results object that contains our model counts). The data is supplied as key-value pairs, and can be accessed in the template using the key.

> **備註：** The callback function from `async.parallel()` above is a little unusual in that we render the page whether or not there was an error (normally you might use a separate execution path for handling the display of errors).

## View

Open **/views/index.pug** and replace its content with the text below.

```js
extends layout

block content
  h1= title
  p Welcome to #[em LocalLibrary], a very basic Express website developed as a tutorial example on the Mozilla Developer Network.

  h1 Dynamic content

  if error
    p Error getting dynamic content.
  else
    p The library has the following record counts:

    ul
      li #[strong Books:] !{data.book_count}
      li #[strong Copies:] !{data.book_instance_count}
      li #[strong Copies available:] !{data.book_instance_available_count}
      li #[strong Authors:] !{data.author_count}
      li #[strong Genres:] !{data.genre_count}
```

The view is straightforward. We extend the **layout.pug** base template, overriding the `block` named '**content**'. The first `h1` heading will be the escaped text for the `title` variable that was passed into the `render()` function—note the use of the '`h1=`' so that the following text is treated as a JavaScript expression. We then include a paragraph introducing the LocalLibrary.

Under the _Dynamic content_ heading we check whether the error variable passed in from the `render()` function has been defined. If so, we note the error. If not, we get and list the number of copies of each model from the `data` variable.

> **備註：** We didn't escape the count values (i.e. we used the `!{}` syntax) because the count values are calculated. If the information was supplied by end-users then we'd escape the variable for display.

## What does it look like?

At this point we should have created everything needed to display the index page. Run the application and open your browser to <http://localhost:3000/>. If everything is set up correctly, your site should look something like the following screenshot.

![Home page - Express Local Library site](locallibary_express_home.png)

> **備註：** You won't be able to use the sidebar links yet because the urls, views, and templates for those pages haven't been defined. If you try you'll get errors like "NOT IMPLEMENTED: Book list" for example, depending on the link you click on. These string literals (which will be replaced with proper data) were specified in the different controllers that live inside your "controllers" file.

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [Book list page](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
