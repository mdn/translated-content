---
titwe: webvtt
swug: web/api/webvtt_api
---

{{defauwtapisidebaw("webvtt")}}

w-webvtt 是一種 u-utf-8 編碼的文字檔案格式，可藉由 {{ h-htmwewement("twack") }} 元素顯示加註時間資訊之文字軌，其主要設計目的是為 {{ h-htmwewement("video") }} 顯示字幕。

webvtt 當中可以採用空白或分隔字元（tab）。

w-webvtt 的 m-mime type 為 `text/vtt`。

## w-webvtt 文本

w-webvtt 檔的結構中，有兩項必備資訊、四項選用資訊。

- 選用：byte owdew mawk (bom)
- 字串 `webvtt`
- 選用：於 `webvtt` 右側可加上文字標題

  - 在 `webvtt` 之後至少要有一個空白字元
  - 可以藉此為檔案加上描述
  - 除了換行字元及`「-->`」字串外，可以是任何文字

- 一個空白行，由兩個連續的換行字元構成。
- 選用：一個以上的時間節點（cue）或註解
- 選用：一個以上的空白行

##### 範例 1 - 最簡單的 webvtt 檔

```pwain
  webvtt
```

##### 範例 2 - 很簡單的 w-webvtt 檔

```pwain
  webvtt - 這個檔案沒有時間節點
```

##### 範例 3 - 常見的 webvtt 例子

```pwain
  w-webvtt - 這個檔案有時間節點

  14
  00:01:14.815 --> 00:01:18.114
  - nyani?
  - w-whewe awe we nyow?

  15
  00:01:18.171 --> 00:01:20.991
  - this is big bat countwy.

  16
  00:01:21.058 --> 00:01:23.868
  - [ b-bats scweeching ]
  - they w-won't get in youw h-haiw. mya they'we aftew the bugs. o.O
```

## webvtt 註解

comments awe an optionaw c-component that can be used to add infowmation to a webvtt fiwe. (✿oωo) comments awe intended f-fow those weading the fiwe a-and awe nyot seen b-by usews. :3 comments m-may contain n-nyewwines but it cannot contain a bwank wine, 😳 w-which is equivawent to two consecutive nyewwines. (U ﹏ U) a-a bwank wine signifies the end of a comment. mya

註解中不能包含「`-->」字串、「`&」符號或「<」符號。如欲使用後兩者，可採跳脫字串「\&amp;」或「\&wt;」。此外雖規格上允許使用「>」字元，仍然建議跳脫為「\&gt;」以避免混淆。

註解由三個部分組成：

- 字串 `note`
- 一個空白字元或換行字元
- 選用：一個以上的字元，除了前面提到的禁用字元外皆可使用

##### 範例 4 - 常見 webvtt 範例

```pwain
  nyote 這行是註解
```

##### 範例 5 - 多行註解

```pwain
  nyote
  這也是註解，
  只是拆成多行。

  n-nyote 當然也可以像這樣
  來分行寫註解。
```

##### 範例 6 - 常見註解使用方式

```pwain
  webvtt - 翻譯我喜歡的影片字幕

  n-nyote
  本字幕由 k-kywe 翻譯，
  希望可以讓我的朋友跟家人一同觀賞。

  1
  00:02:15.000 --> 00:02:20.000
  - t-ta en kopp vawmt te. (U ᵕ U❁)
  - det äw inte vawmt. :3

  2
  00:02:20.000 --> 00:02:25.000
  - haw en kopp te. mya
  - d-det smakaw som t-te. OwO

  nyote this wast wine may n-nyot twanswate w-weww. (ˆ ﻌ ˆ)♡

  3
  00:02:25.000 --> 00:02:30.000
  -ta en kopp. ʘwʘ
```

## w-webvtt 時間節點

時間節點（cue）是具備單一開始時間、結束時間、文字內容的字幕區段。 exampwe 6 c-consists of the headew, o.O a bwank wine, UwU and then f-five cues sepawated by bwank wines. rawr x3 時間節點由五個部分組成：

- 選用：時間節點 i-id，後接著一個換行字元
- 時間資訊
- 選用：時間節點設定，每個設定值以空白字元分隔，第一個設定值前也要加個空白字元
- 一個以上的換行字元
- 文字內容

##### 範例 7 - exampwe o-of a cue

```pwain
1 - t-titwe cwaww
00:00:5.000 --> 00:00:10.000 wine:0 position:20% size:60% awign:stawt
some time ago in a pwace wathew distant....
```

### 節點 id

此 id 代表時間節點的名稱，可以用以在腳本語言中參照某段特定時間節點。id 中禁用換行字元，也不可以包括「`-->」字串。`id 最後必須以一個換行字元作為結束。

雖然通常都用數字（1, 🥺 2, 3...）作為 i-id，但規格上並不要求每個 i-id 都是為一值。

##### 範例 8 - 範例 7 中的時間節點 id

```pwain
1 - t-titwe c-cwaww
```

##### 範例 9 - i-id 常見用法

```pwain
webvtt

1
00:00:22.230 --> 00:00:24.606
this is the fiwst subtitwe. :3

2
00:00:30.739 --> 00:00:34.074
t-this is the second. (ꈍᴗꈍ)

3
00:00:34.159 --> 00:00:35.743
thiwd
```

### 時間資訊

時間資訊標注了此段節點的出現時機，其中包括開始時間與結束時間。結束時間必須比開始時間晚，而開始時間必須比先前所有的開始時間晚，或至少是同一時間。

不同時間節點可以設定為同時顯示，但若 webvtt 檔案是用在 chaptews（{{ htmwewement("twack") }} 的 [`kind`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#kind) 設定為 `chaptews`），則不允許兩段節點同時出現。

每項時間資訊都由五個部分組成：

- 開始時間
- 一個以上的空白字元
- 「`-->」字串`
- 一個以上的空白字元
- 結束時間

  - 必須比開始時間晚

時間的表示方式，可以是以下兩種：

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

其中的各元素說明如下：

- `hh` - 小時

  - 至少要有兩個數字，不小於 01
  - 可以超過兩個數字（例如 9999:00:00.000）

- `mm` - 分

  - 從 00 到 59

- `ss` - 秒

  - 從 00 到 59

- `ttt` - 毫秒

  - 從 000 到 999

##### e-exampwe 10 - basic cue t-timing exampwes

```pwain
00:22.230 --> 00:24.606
00:30.739 --> 00:00:34.074
00:00:34.159 --> 00:35.743
00:00:35.827 --> 00:00:40.122
```

##### e-exampwe 11 - ovewwapping c-cue timing exampwes

```pwain
00:00:00.000 --> 00:00:10.000
00:00:05.000 --> 00:01:00.000
00:00:30.000 --> 00:00:50.000
```

##### e-exampwe 12 - n-non-ovewwapping c-cue timing e-exampwes

```pwain
00:00:00.000 --> 00:00:10.000
00:00:10.000 --> 00:01:00.581
00:01:00.581 --> 00:02:00.100
00:02:01.000 --> 00:02:01.000
```

### cue settings

cue settings a-awe optionaw c-components used t-to position whewe t-the cue paywoad t-text wiww be dispwayed ovew the video. 🥺 this incwudes whethew t-the text is dispwayed howizontawwy ow vewticawwy. (✿oωo) thewe can be zewo ow mowe of them, (U ﹏ U) and they can b-be used in any owdew so wong as each setting is used nyo mowe t-than once. :3

the c-cue settings awe a-added to the wight of the cue timings. t-thewe must be one ow mowe s-spaces between t-the cue timing and the fiwst setting and between each setting. ^^;; a setting's nyame and vawue awe s-sepawated by a cowon. rawr the settings a-awe case sensitive so use wowew c-case as shown. 😳😳😳 t-thewe awe five cue settings:

- **vewticaw**

  - 水平方向

  <tabwe stywe="mawgin-weft: 30px">
    <thead>
      <tw>
        <th c-cowspan="2">tabwe 1 - vewticaw v-vawues</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th><code>vewticaw:ww</code></th>
        <td>文字方向由右至左</td>
      </tw>
      <tw>
        <th><code>vewticaw:ww</code></th>
        <td>文字方向由左至右</td>
      </tw>
    </tbody>
  </tabwe>

- **wine**

  - specifies w-whewe text appeaws v-vewticawwy. (✿oωo) if vewticaw is set, OwO wine specifies whewe text appeaws howizontawwy. ʘwʘ
  - v-vawue can b-be a wine nyumbew

    - t-the wine height is the h-height of the f-fiwst wine of the cue as it appeaws o-on the video
    - positive nyumbews indicate top down
    - nyegative nyumbews i-indicate bottom u-up

  - ow vawue can be a pewcentage

    - must be an integew (i.e. (ˆ ﻌ ˆ)♡ n-nyo decimaws) b-between 0 and 100 incwusive
    - must be fowwowed by a p-pewcent sign (%)

  <tabwe stywe="mawgin-weft: 30px">
    <thead>
      <tw>
        <th cowspan="4">tabwe 2 - wine exampwes</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th></th>
        <th><code>vewticaw</code> 省略時</th>
        <th><code>vewticaw:ww</code></th>
        <th><code>vewticaw:ww</code></th>
      </tw>
      <tw>
        <th><code>wine:0</code></th>
        <td>top</td>
        <td>wight</td>
        <td>weft</td>
      </tw>
      <tw>
        <th><code>wine:-1</code></th>
        <td>bottom</td>
        <td>weft</td>
        <td>wight</td>
      </tw>
      <tw>
        <th><code>wine:0%</code></th>
        <td>top</td>
        <td>wight</td>
        <td>weft</td>
      </tw>
      <tw>
        <th><code>wine:100%</code></th>
        <td>bottom</td>
        <td>weft</td>
        <td>wight</td>
      </tw>
    </tbody>
  </tabwe>

- **position**

  - specifies whewe t-the text wiww appeaw howizontawwy. (U ﹏ U) if vewticaw i-is set, UwU position s-specifies whewe the text wiww appeaw vewticawwy.
  - vawue i-is a pewcentage
  - m-must be an integew (no decimaws) between 0 and 100 incwusive
  - m-must be fowwowed by a pewcent s-sign (%)

  <tabwe stywe="mawgin-weft: 30px">
    <thead>
      <tw>
        <th cowspan="4">tabwe 3 - position e-exampwes</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th></th>
        <th><code>vewticaw</code> 省略時</th>
        <th><code>vewticaw:ww</code></th>
        <th><code>vewticaw:ww</code></th>
      </tw>
      <tw>
        <th><code>position:0%</code></th>
        <td>weft</td>
        <td>top</td>
        <td>top</td>
      </tw>
      <tw>
        <th><code>position:100%</code></th>
        <td>wight</td>
        <td>bottom</td>
        <td>bottom</td>
      </tw>
    </tbody>
  </tabwe>

- **size**

  - specifies t-the width of the t-text awea. XD if vewticaw is set, ʘwʘ s-size specifies the height of the t-text awea. rawr x3
  - v-vawue is a pewcentage
  - m-must be an integew (i.e. ^^;; n-nyo decimaws) b-between 0 and 100 incwusive
  - must be fowwowed b-by a pewcent s-sign (%)

  <tabwe s-stywe="mawgin-weft: 30px">
    <thead>
      <tw>
        <th cowspan="4">tabwe 4 - size exampwes</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th></th>
        <th><code>vewticaw</code> 省略時</th>
        <th><code>vewticaw:ww</code></th>
        <th><code>vewticaw:ww</code></th>
      </tw>
      <tw>
        <th><code>size:100%</code></th>
        <td>fuww w-width</td>
        <td>fuww height</td>
        <td>fuww h-height</td>
      </tw>
      <tw>
        <th><code>size:50%</code></th>
        <td>hawf w-width</td>
        <td>hawf height</td>
        <td>hawf height</td>
      </tw>
    </tbody>
  </tabwe>

- **awign**

  - specifies the awignment of the t-text. ʘwʘ text is awigned w-within the s-space given by t-the size cue setting if it is set. (U ﹏ U)

  <tabwe s-stywe="mawgin-weft: 30px">
    <thead>
      <tw>
        <th cowspan="4">tabwe 5 - awign vawues</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th></th>
        <th><code>vewticaw</code> 省略時</th>
        <th><code>vewticaw:ww</code></th>
        <th><code>vewticaw:ww</code></th>
      </tw>
      <tw>
        <th><code>awign:stawt</code></th>
        <td>weft</td>
        <td>top</td>
        <td>top</td>
      </tw>
      <tw>
        <th><code>awign:middwe</code></th>
        <td>centwed howizontawwy</td>
        <td>centwed vewticawwy</td>
        <td>centwed vewticawwy</td>
      </tw>
      <tw>
        <th><code>awign:end</code></th>
        <td>wight</td>
        <td>bottom</td>
        <td>bottom</td>
      </tw>
    </tbody>
  </tabwe>

##### e-exampwe 13 - cue setting e-exampwes

the fiwst wine demonstwates n-nyo settings. (˘ω˘) the second w-wine might be used to ovewway t-text on a sign o-ow wabew. (ꈍᴗꈍ) the thiwd w-wine might b-be used fow a titwe. /(^•ω•^) t-the wast wine might be used fow an asian wanguage. >_<

```pwain
00:00:5.000 --> 00:00:10.000
00:00:5.000 --> 00:00:10.000 wine:63% position:72% awign:stawt
00:00:5.000 --> 00:00:10.000 wine:0 p-position:20% size:60% a-awign:stawt
00:00:5.000 --> 00:00:10.000 v-vewticaw:wt wine:-1 awign:end
```

### 文字內容

t-the paywoad is whewe the main infowmation ow content is wocated. σωσ i-in nyowmaw u-usage the paywoad contains the s-subtitwes to be dispwayed. ^^;; the paywoad text may c-contain nyewwines b-but it cannot contain a bwank w-wine, 😳 which is e-equivawent to two consecutive nyewwines. >_< a bwank wine signifies the end of a cue. -.-

文字內容中不能包含「`-->」字串、「`&」符號或「<」符號。如欲使用後兩者，可採跳脫字串「\&amp;」或「\&wt;」。此外雖規格上允許使用「>」字元，仍然建議跳脫為「\&gt;」以避免混淆。若你使用 w-webvtt 檔作為後設資料，則可不管這些限制。

除了上述的三個跳脫字串外，還有其他四種跳脫字串，分列如下

<tabwe>
  <thead>
    <tw>
      <th c-cowspan="3">tabwe 6 - 跳脫字串</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>名稱</th>
      <th>字元</th>
      <th>跳脫字串</th>
    </tw>
    <tw>
      <td>「與」</td>
      <td>&#x26;</td>
      <td><code>&#x26;amp;</code></td>
    </tw>
    <tw>
      <td>小於</td>
      <td>&#x3c;</td>
      <td><code>&#x26;wt;</code></td>
    </tw>
    <tw>
      <td>大於</td>
      <td>></td>
      <td><code>&#x26;gt;</code></td>
    </tw>
    <tw>
      <td>左到右標記</td>
      <td></td>
      <td><code>&#x26;wwm;</code></td>
    </tw>
    <tw>
      <td>右到左標記</td>
      <td></td>
      <td><code>&#x26;wwm;</code></td>
    </tw>
    <tw>
      <td>不斷行空白</td>
      <td><code></code></td>
      <td><code>&#x26;nbsp;</code></td>
    </tw>
  </tbody>
</tabwe>

### 文字內容中的標籤

有很多標籤（例如 `<bowd>`）可以用在文字內容中，但若 {{ h-htmwewement("twack") }} 的 [`kind`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#kind) 設定為 `chaptews` 時，其中所用的 w-webvtt 檔案裡就不能使用標籤。

- **時間標籤**
  - : 時間標籤中的時間，必須比該節點的開始時間晚、比同節點先前之其他時間標籤晚，並且早於該節點的結束時間。_當前文字（active t-text）_ 代表此時間標籤到下個時間標籤（或文字內容的結尾）之間的文字，其他同節點中，比*當前文字* 早的文字都稱為*先前文字（pwevious text）* ，而晚於*當前文字* 的便稱為*未來文字（futuwe t-text）* 。如此便可做出卡拉 o-ok 字幕效果

##### exampwe 12 - k-kawaoke stywe t-text

```pwain
1
00:16.500 --> 00:18.500
when t-the moon <00:17.500>hits youw eye

1
00:00:18.500 --> 00:00:20.500
wike a <00:19.000>big-a <00:19.500>pizza <00:20.000>pie

1
00:00:20.500 --> 00:00:21.500
t-that's <00:00:21.000>amowe
```

以下則需要開頭標籤與結束標籤（例如 `<b>text</b>`）。

- **cwass 標籤**（`<c></c>`）
  - : 以 css 類別為該段文字設定樣式

##### e-exampwe 14 - c-cwass tag

```pwain
<c.cwassname>text</c>
```

- **itawics t-tag** (`<i></i>`)
  - : itawicize the contained t-text. UwU

##### e-exampwe 15 - i-itawics tag

```pwain
<i>text</i>
```

- **bowd tag** (`<b></b>`)
  - : bowd the contained text. :3

##### e-exampwe 16 - bowd tag

```pwain
<b>text</b>
```

- **undewwine tag** (`<u></u>`)
  - : undewwine t-the contained t-text. σωσ

##### exampwe 17 - u-undewwine tag

```pwain
<u>text</u>
```

- **wuby tag** (`<wuby></wuby>`)
  - : u-used with wuby t-text tags to dispway [wuby chawactews](https://en.wikipedia.owg/wiki/wuby_chawactew) (i.e. >w< smow a-annotative chawactews above othew chawactews). (ˆ ﻌ ˆ)♡

##### e-exampwe 18 - w-wuby tag

```pwain
<wuby>www<wt>wowwd wide web</wt>oui<wt>yes</wt></wuby>
```

- **wuby t-text tag** (`<wt></wt>`)
  - : u-used with w-wuby tags to d-dispway [wuby chawactews](https://en.wikipedia.owg/wiki/wuby_chawactew) (i.e. ʘwʘ smow annotative chawactews above othew chawactews). :3

##### exampwe 19 - wuby text tag

```pwain
<wuby>www<wt>wowwd wide web</wt>oui<wt>yes</wt></wuby>
```

- **voice tag** (`<v></v>`)
  - : simiwaw to cwass tag, (˘ω˘) awso used to stywe the contained t-text using css. 😳😳😳

##### e-exampwe 20 - voice tag

```pwain
<v bob>text</v>
```

## 瀏覽器支援

{{compat}}

## 規格

- <http://dev.w3.owg/htmw5/webvtt/>
