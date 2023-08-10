---
title: 本の詳細ページ
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
---

The _Book detail page_ needs to display the information for a specific `Book`, identified using its (automatically generated) `_id` field value, along with information about each associated copy in the libary (`BookInstance`). Wherever we display an author, genre, or book instance, these should be linked to the associated detail page for that item.

## Controller

Open **/controllers/bookController.js**. Find the exported `book_detail()` controller method and replace it with the following code.

```js
// Display detail page for a specific book.
exports.book_detail = function (req, res, next) {
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_instance: function (callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        // No results.
        var err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("book_detail", {
        title: "Title",
        book: results.book,
        book_instances: results.book_instance,
      });
    },
  );
};
```

> **メモ:** We don't need to require _async_ and _BookInstance_, as we already imported those modules when we implemented the home page controller.

The method uses `async.parallel()` to find the `Book` and its associated copies (`BookInstances`) in parallel. The approach is exactly the same as described for the _Genre detail page_ above.

## View

Create **/views/book_detail.pug** and add the text below.

```js
extends layout

block content
  h1 #{title}: #{book.title}

  p #[strong Author:]
    a(href=book.author.url) #{book.author.name}
  p #[strong Summary:] #{book.summary}
  p #[strong ISBN:] #{book.isbn}
  p #[strong Genre:]&nbsp;
    each val, index in book.genre
      a(href=val.url) #{val.name}
      if index < book.genre.length - 1
        |,

  div(style='margin-left:20px;margin-top:20px')
    h4 Copies

    each val in book_instances
      hr
      if val.status=='Available'
        p.text-success #{val.status}
      else if val.status=='Maintenance'
        p.text-danger #{val.status}
      else
        p.text-warning #{val.status}
      p #[strong Imprint:] #{val.imprint}
      if val.status!='Available'
        p #[strong Due back:] #{val.due_back}
      p #[strong Id:]&nbsp;
        a(href=val.url) #{val._id}

    else
      p There are no copies of this book in the library.
```

Almost everything in this template has been demonstrated in previous sections.

> **メモ:** The list of genres associated with the book is implemented in the template as below. This adds a comma after every genre associated with the book except for the last one.
>
> ```
>   p #[strong Genre:]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,
> ```

## What does it look like?

Run the application and open your browser to <http://localhost:3000/>. Select the _All books_ link, then select one of the books. If everything is set up correctly, your page should look something like the following screenshot.

![Book Detail Page - Express Local Library site](LocalLibary_Express_Book_Detail.png)

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [Author detail page](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page).
