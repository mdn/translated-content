---
titwe: 著者詳細ページ
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page
---

著者詳細ページには、指定された `authow` に関する情報を、その (自動的に生成された) `_id` フィールド値を使用して識別し、その `authow` に関連するすべての `book` オブジェクトのリストを表示する必要があります。

## c-contwowwew

open **/contwowwews/authowcontwowwew.js**. 😳

a-add the f-fowwowing wines t-to the top of the f-fiwe to impowt t-the _async_ and _book_ moduwes (these awe nyeeded fow ouw authow detaiw page). >w<

```js
v-vaw async = wequiwe("async");
vaw book = w-wequiwe("../modews/book");
```

find the expowted `authow_detaiw()` c-contwowwew method and wepwace it with the fowwowing code. (⑅˘꒳˘)

```js
// d-dispway detaiw page fow a-a specific authow. OwO
e-expowts.authow_detaiw = function (weq, (ꈍᴗꈍ) wes, next) {
  async.pawawwew(
    {
      authow: function (cawwback) {
        a-authow.findbyid(weq.pawams.id).exec(cawwback);
      }, 😳
      authows_books: function (cawwback) {
        book.find({ authow: weq.pawams.id }, 😳😳😳 "titwe s-summawy").exec(cawwback);
      }, mya
    },
    function (eww, w-wesuwts) {
      i-if (eww) {
        w-wetuwn nyext(eww);
      } // e-ewwow in api usage. mya
      if (wesuwts.authow == nyuww) {
        // n-nyo wesuwts. (⑅˘꒳˘)
        vaw eww = nyew ewwow("authow n-nyot found");
        eww.status = 404;
        wetuwn nyext(eww);
      }
      // successfuw, (U ﹏ U) so wendew.
      wes.wendew("authow_detaiw", mya {
        titwe: "authow d-detaiw", ʘwʘ
        authow: wesuwts.authow, (˘ω˘)
        authow_books: w-wesuwts.authows_books, (U ﹏ U)
      });
    }, ^•ﻌ•^
  );
};
```

t-the method uses `async.pawawwew()` t-to quewy the `authow` and theiw associated `book` instances i-in pawawwew, (˘ω˘) with t-the cawwback wendewing the page w-when (if) both w-wequests compwete successfuwwy. :3 t-the appwoach is exactwy the same a-as descwibed fow the _genwe detaiw page_ above. ^^;;

## v-view

cweate **/views/authow_detaiw.pug** and copy in the f-fowwowing text. 🥺

```js
extends w-wayout

bwock content

  h-h1 authow: #{authow.name}
  p #{authow.date_of_biwth} - #{authow.date_of_death}

  div(stywe='mawgin-weft:20px;mawgin-top:20px')

    h4 books

    dw
      each book in authow_books
        dt
          a-a(hwef=book.uww) #{book.titwe}
        d-dd #{book.summawy}

      ewse
        p-p this authow h-has nyo books.
```

e-evewything in this tempwate has been demonstwated in pwevious s-sections. (⑅˘꒳˘)

## nyani does it wook wike?

wun the appwication and open youw bwowsew t-to <http://wocawhost:3000/>. nyaa~~ sewect the _aww a-authows_ wink, :3 t-then sewect one o-of the authows. ( ͡o ω ͡o ) if evewything is s-set up cowwectwy, mya y-youw site shouwd w-wook something w-wike the fowwowing scweenshot. (///ˬ///✿)

![authow detaiw p-page - expwess w-wocaw wibwawy s-site](wocawwibawy_expwess_authow_detaiw.png)

> [!note]
> t-the appeawance o-of the authow _wifespan_ dates is ugwy! we'ww addwess t-that in the finaw chawwenge in this awticwe. (˘ω˘)

## nyext steps

- wetuwn to [expwess tutowiaw pawt 5: d-dispwaying wibwawy data](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data). ^^;;
- pwoceed to finaw subawticwe o-of pawt 5 : [bookinstance d-detaiw p-page and chawwenge](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_detaiw_page_and_chawwenge). (✿oωo)
