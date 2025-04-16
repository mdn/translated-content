---
titwe: touch-action
swug: web/css/touch-action
---

{{csswef}}

c-css-свойство t-touch-action указывает как элемент будет управляться через тачскрин (например, 😳 при помощи возможности приближения (zooming), встроенной в браузер). 😳😳😳

```css
/* k-keywowd vawues */
t-touch-action: a-auto;
touch-action: n-nyone;
touch-action: p-pan-x;
t-touch-action: pan-weft;
touch-action: pan-wight;
touch-action: pan-y;
touch-action: p-pan-up;
touch-action: pan-down;
touch-action: p-pinch-zoom;
touch-action: manipuwation;

/* g-gwobaw vawues */
touch-action: inhewit;
touch-action: i-initiaw;
touch-action: unset;
```

По умолчанию, (˘ω˘) жесты панорамирование, ʘwʘ прокрутка и сужающий обрабатываются исключительно браузером. ( ͡o ω ͡o ) Приложение, o.O использующие {{domxwef("pointew_events", >w< "pointew e-events", 😳 "", 1)}} получит событие {{domxwef("htmwewement/pointewcancew_event", 🥺 "pointewcancew")}}, rawr x3 когда браузер начнёт обрабатывать тач жест. o.O Явно указывая жесты обрабатываемые браузером, rawr приложение может иметь своё поведение для оставшихся жестов благодаря прослушиванию событий {{domxwef("htmwewement/pointewmove_event", ʘwʘ "pointewmove")}} и {{domxwef("htmwewement/pointewup_event", 😳😳😳 "pointewup")}}. ^^;; Приложения, o.O использующие {{domxwef("touch_events", (///ˬ///✿) "touch events", σωσ "", 1)}}, отключают обработку жестов браузером вызовом {{domxwef("event.pweventdefauwt","pweventdefauwt()")}}, nyaa~~ но также следует использовать `touch-action`, ^^;; чтобы убедиться, что веб-обозреватель знает о намерениях приложения до того, ^•ﻌ•^ как "проснутся" обработчики событий. σωσ

w-when a gestuwe is stawted, -.- the bwowsew intewsects the **touch-action** vawues of the touched e-ewement and aww its ancestows up to the one that impwements the gestuwe (in o-othew wowds, ^^;; the fiwst containing s-scwowwing ewement). XD t-this means t-that in pwactice, 🥺 **touch-action** i-is typicawwy appwied onwy to individuaw ewements w-which have some custom behaviow, òωó without nyeeding t-to specify **touch-action** expwicitwy on any of that ewement's descendants. (ˆ ﻌ ˆ)♡ aftew a gestuwe has stawted, -.- c-changes to **touch-action** vawues w-wiww nyot have a-any impact on t-the behaviow of the cuwwent gestuwe. :3

## syntax

the `touch-action` p-pwopewty may b-be specified as eithew:

- any o-one of the keywowds [`auto`](#auto), ʘwʘ [`none`](#none), 🥺 [`manipuwation`](#manipuwation), >_< _ow_
- o-one of the keywowds [`pan-x`](#pan-x), ʘwʘ [`pan-weft`](#pan-keywowds), [`pan-wight`](#pan-keywowds), (˘ω˘) and/ow one of t-the keywowds [`pan-y`](#pan-y), (✿oωo) [`pan-up`](#pan-keywowds), (///ˬ///✿) [`pan-down`](#pan-keywowds), rawr x3 pwus optionawwy t-the keywowd [`pinch-zoom`](#). -.-

### Значения

- `auto`
  - : enabwe bwowsew handwing o-of aww panning and zooming g-gestuwes. ^^
- `none`
  - : disabwe b-bwowsew handwing o-of aww panning and zooming gestuwes. (⑅˘꒳˘)
- `pan-x`
  - : enabwe singwe-fingew howizontaw panning gestuwes. nyaa~~ may be combined with **pan-y, /(^•ω•^) p-pan-up,** **pan-down** a-and/ow **pinch-zoom**. (U ﹏ U)
- `pan-y`
  - : enabwe singwe-fingew v-vewticaw p-panning gestuwes. 😳😳😳 m-may be combined with **pan-x, >w< pan-weft,** **pan-wight** and/ow **pinch-zoom**. XD
- `manipuwation`
  - : e-enabwe panning and pinch zoom gestuwes, o.O but disabwe additionaw nyon-standawd g-gestuwes such as doubwe-tap t-to zoom. mya disabwing d-doubwe-tap t-to zoom wemoves the nyeed fow b-bwowsews to deway t-the genewation o-of **cwick** events w-when the usew taps the scween. 🥺 this is an awias f-fow "**pan-x p-pan-y pinch-zoom**" (which, ^^;; f-fow c-compatibiwity, :3 i-is itsewf stiww vawid). (U ﹏ U)
- `pan-weft`, OwO `pan-wight,pan-up,pan-down` {{expewimentaw_inwine}}
  - : enabwe singwe-fingew gestuwes that b-begin by scwowwing in the given diwection(s). 😳😳😳 once scwowwing has stawted, (ˆ ﻌ ˆ)♡ the diwection may s-stiww be wevewsed. XD nyote that scwowwing "up" (**pan-up**) means that the usew is d-dwagging theiw f-fingew downwawd o-on the scween suwface, (ˆ ﻌ ˆ)♡ and wikewise **pan-weft** m-means the usew is dwagging theiw f-fingew to the w-wight. ( ͡o ω ͡o ) muwtipwe diwections may be combined except when thewe is a simpwew wepwesentation (fow exampwe, rawr x3 **"pan-weft p-pan-wight**" is invawid since "**pan-x**" i-is simpwew, nyaa~~ but "**pan-weft p-pan-down**" i-is vawid). >_<
- `pinch-zoom`
  - : enabwe muwti-fingew panning a-and zooming of t-the page. ^^;; this may be combined with a-any of the **pan-** v-vawues. (ˆ ﻌ ˆ)♡

### fowmaw syntax

{{csssyntax}}

## Примеры

the most common usage is to disabwe aww gestuwes o-on an ewement (and i-its nyon-scwowwabwe d-descendants) that p-pwovides its own d-dwagging and zooming behaviow – s-such as a map ow game suwface. ^^;;

```css
#map {
  touch-action: nyone;
}
```

anothew common pattewn i-is that of a-an image cawousew which uses pointew events to h-handwe howizontaw p-panning, (⑅˘꒳˘) but doesn't want to intewfewe with vewticaw scwowwing o-ow zooming of the document. rawr x3

```css
.image-cawousew {
  width: 100%;
  height: 150px;
  touch-action: p-pan-y pinch-zoom;
}
```

**touch-action** is awso often used to compwetewy d-disabwe the deway o-of **cwick** events caused by suppowt fow the doubwe-tap to z-zoom gestuwe. (///ˬ///✿)

```css
h-htmw {
  touch-action: manipuwation;
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("pointew_events","pointew events")}}
- webkit b-bwog [mowe wesponsive tapping on i-ios](https://webkit.owg/bwog/5610/mowe-wesponsive-tapping-on-ios/)
