---
title: 創建種類表單
slug: Learn/Server-side/Express_Nodejs/forms/Create_genre_form
---

本章節演示如何定義我們的頁面，創建`Genre` 物件（這是一個很好的起點，因為類型`Genre`只有一個欄位，就是它的名稱 `name`，沒有依賴項）。像任何其他頁面一樣，我們需要設置路由，控制器和視圖。

## 引入驗證與無害化方法

在我們的控制器中使用 _express-validator_ 驗證器，我們必須導入我們想要從 '**express-validator/check**' 和 '**express-validator/filter**' 模塊中使用的函數。

打開 **/controllers/genreController.js**，並在文件頂部添加以下幾行：

```js
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
```

## Controller—get route

Find the exported `genre_create_get()` controller method and replace it with the following code. This simply renders the **genre_form.pug** view, passing a title variable.

```js
// Display Genre create form on GET.
exports.genre_create_get = function(req, res, next) {
    res.render('genre_form', { title: 'Create Genre' });
};
```

## Controller—post route

Find the exported `genre_create_post()` controller method and replace it with the following code.

```js
// Handle Genre create on POST.
exports.genre_create_post =  [

    // Validate that the name field is not empty.
    body('name', 'Genre name required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('name').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var genre = new Genre(
          { name: req.body.name }
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
        return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            Genre.findOne({ 'name': req.body.name })
                .exec( function(err, found_genre) {
                     if (err) { return next(err); }

                     if (found_genre) {
                         // Genre exists, redirect to its detail page.
                         res.redirect(found_genre.url);
                     }
                     else {

                         genre.save(function (err) {
                           if (err) { return next(err); }
                           // Genre saved. Redirect to genre detail page.
                           res.redirect(genre.url);
                         });

                     }

                 });
        }
    }
];
```

The first thing to note is that instead of being a single middleware function (with arguments `(req, res, next)`) the controller specifies an _array_ of middleware functions. The array is passed to the router function and each method is called in order.

> **備註：** This approach is needed, because the sanitisers/validators are middleware functions.

The first method in the array defines a validator (`body`) to check that the _name_ field is not empty (calling `trim()` to remove any trailing/leading whitespace before performing the validation). The second method in the array (`sanitizeBody()`) creates a sanitizer to `trim()` the _name_ field and `escape()` any dangerous HTML characters.

```js
// Validate that the name field is not empty.
body('name', 'Genre name required').isLength({ min: 1 }).trim(),

// Sanitize (trim and escape) the name field.
sanitizeBody('name').trim().escape(),
```

> **備註：** Sanitizers run during validation do not modify the request. That is why we have to call `trim()` in both steps above!

After specifying the validators and sanitizers we create a middleware function to extract any validation errors. We use `isEmpty()` to check whether there are any errors in the validation result. If there are then we render the form again, passing in our sanitised genre object and the array of error messages (`errors.array()`).

```js
// Process request after validation and sanitization.
(req, res, next) => {

    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var genre = new Genre(
      { name: req.body.name }
    );

    if (!errors.isEmpty()) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
    return;
    }
    else {
        // Data from form is valid.
        ... <save the result> ...
    }
}
```

If the genre name data is valid then we check if a `Genre` with the same name already exists (as we don't want to create duplicates). If it does we redirect to the existing genre's detail page. If not, we save the new `Genre` and redirect to its detail page.

```js
// Check if Genre with same name already exists.
Genre.findOne({ 'name': req.body.name })
    .exec( function(err, found_genre) {
    if (err) { return next(err); }
        if (found_genre) {
            // Genre exists, redirect to its detail page.
            res.redirect(found_genre.url);
            }
        else {
            genre.save(function (err) {
                if (err) { return next(err); }
                    // Genre saved. Redirect to genre detail page.
                    res.redirect(genre.url);
                });
        }
});
```

This same pattern is used in all our post controllers: we run validators, then sanitisers, then check for errors and either re-render the form with error information or save the data.

## View

The same view is rendered in both the `GET` and `POST` controllers/routes when we create a new `Genre` (and later on it is also used when we _update_ a `Genre`). In the `GET` case the form is empty and we just pass a title variable. In the `POST` case the user has previously entered invalid data—in the `genre` variable we pass back a sanitized version of the entered data and in the `errors` variable we pass back an array of error messages.

```js
res.render('genre_form', { title: 'Create Genre'});
res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
```

Create **/views/genre_form.pug** and copy in the text below.

```html
extends layout

block content
  h1 #{title}

  form(method='POST' action='')
    div.form-group
      label(for='name') Genre:
      input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' value=(undefined===genre ? '' : genre.name))
    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

Much of this template will be familiar from our previous tutorials. First we extend the **layout.pug** base template and override the `block` named '**content**'. We then have a heading with the `title` we passed in from the controller (via the `render()` method).

Next we have the pug code for our HTML form that uses the `POST` `method` to send the data to the server, and because the `action` is an empty string, will send the data to the same URL as the page.

The form defines a single required field of type "text" called "name". The default _value_ of the field depends on whether the `genre` variable is defined. If called from the `GET` route it will be empty as this is a new form. If called from a `POST` route it will contain the (invalid) value originally entered by the user.

The last part of the page is the error code. This simply prints a list of errors, if the error variable has been defined (in other words, this section will not appear when the template is rendered on the `GET` route).

> **備註：** This is just one way to render the errors. You can also get the names of the affected fields from the error variable, and use these to control where the error messages are rendered, whether to apply custom CSS, etc.

## What does it look like?

Run the application, open your browser to <http://localhost:3000/>, then select the _Create new genre_ link. If everything is set up correctly, your site should look something like the following screenshot. After you enter a value, it should be saved and you'll be taken to the genre detail page.

![Genre Create Page - Express Local Library site](locallibary_express_genre_create_empty.png)

The only error we validate against server-side is that the genre field must not be empty. The screenshot below shows what the error list would look like if you didn't supply a genre (highlighted in red).

![](locallibary_express_genre_create_error.png)

> **備註：** Our validation uses `trim()` to ensure that whitespace is not accepted as a genre name. We can also validate that the field is not empty on the client side by adding the value `required='true'` to the field definition in the form:
>
> ```js
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' value=(undefined===genre ? '' : genre.name), required='true' )
> ```

## Next steps

- Return to [Express Tutorial Part 6: Working with forms.](/zh-TW/docs/Learn/Server-side/Express_Nodejs/forms)
- Proceed to the next subarticle of part 6: [Create Author form](/zh-TW/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form).
