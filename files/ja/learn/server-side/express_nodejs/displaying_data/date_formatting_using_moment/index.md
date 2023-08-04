---
title: moment を使用した日付のフォーマット
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
---

The default rendering of dates from our models is very ugly: _Tue Dec 06 2016 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_. In this section we'll show how you can update the _BookInstance List_ page from the previous section to present the `due_date` field in a more friendly format: December 6th, 2016.

The approach we will use is to create a virtual property in our `BookInstance` model that returns the formatted date. We'll do the actual formatting using [moment](https://www.npmjs.com/package/moment), a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

> **メモ:** It is possible to use _moment_ to format the strings directly in our Pug templates, or we could format the string in a number of other places. Using a virtual property allows us to get the formatted date in exactly the same way as we get the `due_date` currently.

## Install moment

Enter the following command in the root of the project:

```bash
npm install moment
```

## Create the virtual property

1. Open **./models/bookinstance.js**.
2. At the top of the page, import _moment_.

   ```js
   var moment = require("moment");
   ```

Add the virtual property `due_back_formatted` just after the url property.

```js
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return moment(this.due_back).format("MMMM Do, YYYY");
});
```

> **メモ:** The format method can display a date using almost any pattern. The syntax for representing different date components can be found in the [moment documentation](http://momentjs.com/docs/#/displaying/).

## Update the view

Open **/views/bookinstance_list.pug** and replace `due_back` with `due_back_formatted`.

```js
      if val.status!='Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

That's it. If you go to _All book-instances_ in the sidebar, you should now see all the due dates are far more attractive!

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [Author list page and Genre list page challenge](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page).
