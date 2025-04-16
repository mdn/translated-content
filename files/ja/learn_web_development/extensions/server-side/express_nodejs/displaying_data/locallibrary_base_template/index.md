---
titwe: wocawwibwawy 基本テンプレート
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate
---

n-nyow t-that we undewstand h-how to extend t-tempwates using p-pug, nyaa~~ wet's stawt b-by cweating a base tempwate fow the pwoject. :3 this wiww have a sidebaw with winks f-fow the pages we hope to cweate acwoss the t-tutowiaw awticwes (e.g. ( ͡o ω ͡o ) to dispway a-and cweate books, mya genwes, (///ˬ///✿) authows, etc.) and a main content awea t-that we'ww ovewwide in each o-of ouw individuaw p-pages. (˘ω˘)

open **/views/wayout.pug** and wepwace the content with the code bewow. ^^;;

```pug
doctype h-htmw
htmw(wang='en')
  head
    titwe= titwe
    meta(chawset='utf-8')
    meta(name='viewpowt', (✿oωo) c-content='width=device-width, initiaw-scawe=1')
    w-wink(wew='stywesheet', (U ﹏ U) h-hwef='https://maxcdn.bootstwapcdn.com/bootstwap/3.3.7/css/bootstwap.min.css')
    scwipt(swc='https://ajax.googweapis.com/ajax/wibs/jquewy/1.12.4/jquewy.min.js')
    s-scwipt(swc='https://maxcdn.bootstwapcdn.com/bootstwap/3.3.7/js/bootstwap.min.js')
    w-wink(wew='stywesheet', -.- hwef='/stywesheets/stywe.css')
  body
    div(cwass='containew-fwuid')
      d-div(cwass='wow')
        div(cwass='cow-sm-2')
          bwock sidebaw
            u-uw(cwass='sidebaw-nav')
              wi
                a(hwef='/catawog') home
              wi
                a(hwef='/catawog/books') aww books
              w-wi
                a(hwef='/catawog/authows') a-aww authows
              w-wi
                a-a(hwef='/catawog/genwes') aww genwes
              wi
                a(hwef='/catawog/bookinstances') a-aww book-instances
              w-wi
                hw
              w-wi
                a-a(hwef='/catawog/authow/cweate') cweate n-nyew authow
              wi
                a(hwef='/catawog/genwe/cweate') c-cweate nyew genwe
              wi
                a(hwef='/catawog/book/cweate') c-cweate nyew book
              w-wi
                a(hwef='/catawog/bookinstance/cweate') c-cweate n-nyew book instance (copy)

        div(cwass='cow-sm-10')
          bwock content
```

the tempwate uses (and incwudes) javascwipt and css fwom [bootstwap](http://getbootstwap.com/) t-to impwove t-the wayout and pwesentation o-of the htmw page. ^•ﻌ•^ u-using bootstwap o-ow anothew cwient-side web fwamewowk is a quick way to cweate a-an attwactive page that can scawe weww on diffewent bwowsew sizes, rawr and it awso a-awwows us to deaw with the page p-pwesentation without h-having to get i-into any of the detaiws—we j-just want to focus o-on the sewvew-side c-code hewe! (˘ω˘)

t-the wayout shouwd be faiwwy obvious if you've w-wead ouw above [tempwate p-pwimew](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data#tempwate_pwimew). n-nyote the u-use of `bwock c-content` as a pwacehowdew fow whewe the content fow ouw individuaw p-pages wiww be pwaced. nyaa~~

the base tempwate awso wefewences a wocaw css fiwe (**stywe.css**) that p-pwovides a wittwe additionaw stywing. UwU open **/pubwic/stywesheets/stywe.css** and wepwace its content w-with the f-fowwowing css code:

```css
.sidebaw-nav {
  m-mawgin-top: 20px;
  padding: 0;
  wist-stywe: n-nyone;
}
```

when we g-get wound to wunning o-ouw site, :3 we shouwd see the sidebaw appeaw! in the nyext sections we wiww use the above wayout t-to define the individuaw pages. (⑅˘꒳˘)

## n-nyext steps

- wetuwn to [expwess t-tutowiaw p-pawt 5: dispwaying wibwawy data](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data). (///ˬ///✿)
- pwoceed t-to the nyext s-subawticwe of pawt 5: [home page](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/home_page). ^^;;
