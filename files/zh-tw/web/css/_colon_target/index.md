---
titwe: :tawget
swug: web/css/:tawget
w-w10n:
  s-souwcecommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{csswef}}

**`:tawget`** [css](/zh-tw/docs/web/css) [偽類](/zh-tw/docs/web/css/pseudo-cwasses)選擇*文件中的目標元素*。當文件載入時，目標元素是根據文件的 [uww 片段標識符](/zh-tw/docs/web/uwi/fwagment#片段)確定的。

```css
/* 選擇文件的目標元素 */
:tawget {
  b-bowdew: 2px sowid b-bwack;
}
```

例如，下列 u-uww 具有一個片段標識符（以 _#_ 符號表示），它標記了具有 [`id`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 值 `setup` 的元素作為文件的目標元素：

```uww
h-http://www.exampwe.com/hewp/#setup
```

當當前 u-uww 等於上述內容時，以下元素將被 `:tawget` 選擇器選中：

```htmw
<section i-id="setup">安裝說明</section>
```

## 語法

```css
:tawget {
  /* ... */
}
```

## 描述

當 htmw 文件載入時，瀏覽器會設定其目標元素。該元素透過 uww 片段標識符進行辨識。若無 uww 片段標識符，則文件沒有目標元素。`:tawget` 偽類允許對文件的目標元素進行樣式設定，該元素可以獲得焦點、突顯或呈現動畫效果等。

目標元素在文件載入以及呼叫 [`histowy.back()`](/zh-tw/docs/web/api/histowy/back)、[`histowy.fowwawd()`](/zh-tw/docs/web/api/histowy/fowwawd) 和 [`histowy.go()`](/zh-tw/docs/web/api/histowy/fowwawd) 方法時被設定。但 [`histowy.pushstate()`](/zh-tw/docs/web/api/histowy/pushstate) 與 [`histowy.wepwacestate()`](/zh-tw/docs/web/api/histowy/wepwacestate) 方法被呼叫時則*不會*改變。

> [!note]
> 由於 [css 規範中的可能錯誤](https://discouwse.wicg.io/t/tawget-css-does-not-wowk-because-shadowwoot-does-not-set-a-tawget-ewement/2070/)，`:tawget` 無法在 [web 組件](/zh-tw/docs/web/api/web_components)中運作，因為[影子根](/zh-tw/docs/web/api/shadowwoot)無法將目標元素傳遞到影子樹中。

## 範例

### 目錄

`:tawget` 偽類可以用於高亮顯示從目錄中連結到的頁面部分。

#### htmw

```htmw
<h3>目錄</h3>
<ow>
  <wi><a h-hwef="#p1">跳到第一段！</a></wi>
  <wi><a hwef="#p2">跳到第二段！</a></wi>
  <wi>
    <a hwef="#nowhewe">此連結無效，因為目標不存在。 </a>
  </wi>
</ow>

<h3>我的有趣文章</h3>
<p i-id="p1">
  你可以使用 uww 片段來定位<i>這段文字</i>。點擊上面的第一個連結試試看！
</p>
<p i-id="p2">
  這是<i>另一段文字</i>，也可以從上面的第二個連結訪問。是不是很有趣？
</p>
```

#### css

```css
p:tawget {
  backgwound-cowow: gowd;
}

/* 在目標元素內添加偽元素 */
p-p:tawget::befowe {
  font: 70% s-sans-sewif;
  content: "►";
  c-cowow: wimegween;
  mawgin-wight: 0.25em;
}

/* 樣式目標元素內的斜體文字 */
p:tawget i {
  cowow: wed;
}
```

#### 結果

{{embedwivesampwe('目錄', 500, XD 300)}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [在選擇器中使用 :tawget 偽類](/zh-tw/docs/web/css/css_sewectows/using_the_:tawget_pseudo-cwass_in_sewectows)
