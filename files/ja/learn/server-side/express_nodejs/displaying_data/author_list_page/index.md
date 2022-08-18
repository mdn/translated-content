---
title: 著者リストページとジャンルリストページのチャレンジ
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
---
The author list page needs to display a list of all authors in the database, with each author name linked to its associated author detail page. The date of birth and date of death should be listed after the name on the same line.

## Controller

The author list controller function needs to get a list of all `Author` instances, and then pass these to the template for rendering.

Open **/controllers/authorController.js**. Find the exported `author_list()` controller method near the top of the file and replace it with the following code (the changed code is shown in bold).

```js
// Display list of all Authors.
exports.author_list = function(req, res, next) {

  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });

};
```

The method uses the model's `find()`, `sort()` and `exec()` functions to return all `Author` objects sorted by `family_name` in alphabetic order. The callback passed to the `exec()` method is called with any errors (or `null`) as the first parameter, or a list of all authors on success. If there is an error it calls the next middleware function with the error value, and if not it renders the **author_list**(.pug) template, passing the page `title` and the list of authors (`author_list`).

## View

Create **/views/author_list.pug** and replace its content with the text below.

```js
extends layout

block content
  h1= title

  ul
    each author in author_list
      li
        a(href=author.url) #{author.name}
        |  (#{author.date_of_birth} - #{author.date_of_death})

    else
      li There are no authors.
```

The view follows exactly the same pattern as our other templates.

## What does it look like?

Run the application and open your browser to <http://localhost:3000/>. Then select the _All authors_ link. If everything is set up correctly, the page should look something like the following screenshot.

![Author List Page - Express Local Library site](https://mdn.mozillademos.org/files/14468/LocalLibary_Express_Author_List.png)

> **Note:** The appearance of the author _lifespan_ dates is ugly! You can improve this using the [same approach](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data#date_formatting) as we used for the `BookInstance` list (adding the virtual property for the lifespan to the `Author` model). This time, however, there are missing dates, and references to nonexistent properties are ignored unless strict mode is in effect. `moment()` returns the current time, and you don't want missing dates to be formatted as if they were today. One way to deal with this is to define the body of the function that returns a formatted date so it returns a blank string unless the date actually exists. For example:
>
> `return this.date_of_birth ? moment(this.date_of_birth).format('YYYY-MM-DD') : '';`

## Genre list page—challenge!<a class="button section-edit only-icon" href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data$edit#Genre_list_page—challenge!" rel="nofollow, noindex"><span>Edit</span></a>

In this section you should implement your own genre list page. The page should display a list of all genres in the database, with each genre linked to its associated detail page. A screenshot of the expected result is shown below.

![Genre List - Express Local Library site](https://mdn.mozillademos.org/files/14460/LocalLibary_Express_Genre_List.png)

The genre list controller function needs to get a list of all `Genre` instances, and then pass these to the template for rendering.

1.  You will need to edit `genre_list()` in **/controllers/genreController.js**.
2.  The implementation is almost exactly the same as the `author_list()` controller.

    - Sort the results by name, in ascending order.

3.  The template to be rendered should be named **genre_list.pug**.
4.  The template to be rendered should be passed the variables `title` ('Genre List') and `genre_list` (the list of genres returned from your `Genre.find()` callback.
5.  The view should match the screenshot/requirements above (this should have a very similar structure/format to the Author list view, except for the fact that genres do not have dates).

## Next steps

Return to [Express Tutorial Part 5: Displaying library data](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data).

Proceed to the next subarticle of part 5: [Genre detail page](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
