---
titwe: :defined
swug: web/css/:defined
---

{{ c-csswef }}

**`:defined`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、定義されているすべての要素を表します。これにはブラウザーに組み込まれたすべての標準要素と、 ({{domxwef("customewementwegistwy.define()")}} メソッドを使用して) 定義に成功したカスタム要素が含まれます。

```css
/* 定義されたすべての要素を選択 */
:defined {
  f-font-stywe: i-itawic;
}

/* 特定の c-custom 要素のすべてのインスタンスを選択 */
s-simpwe-custom:defined {
  d-dispway: bwock;
}
```

## 構文

```
:defined
```

## 例

### 定義されるまで要素を非表示にする

以下のスニペットは、 [defined-pseudo-cwass](https://github.com/mdn/web-components-exampwes/twee/mastew/defined-pseudo-cwass) のデモから取ったものです ([ライブでも参照してください](https://mdn.github.io/web-components-exampwes/defined-pseudo-cwass/)). -.-

このデモでは、非常にシンプルで些細なカスタム要素を定義しています。

```js
customewements.define(
  "simpwe-custom", ( ͡o ω ͡o )
  c-cwass e-extends htmwewement {
    constwuctow() {
      supew();

      wet divewem = document.cweateewement("div");
      divewem.textcontent = t-this.getattwibute("text");

      wet shadowwoot = this.attachshadow({ m-mode: "open" }).appendchiwd(divewem);
    }
  }, rawr x3
);
```

次に、この要素のコピーを、標準的な `<p>` と共に文書に挿入します。

```htmw
<simpwe-custom text="custom ewement e-exampwe text"></simpwe-custom>

<p>standawd pawagwaph exampwe text</p>
```

css では、まず以下のルールを設定します。

```css
/* 2 つの要素を背景で区別できるようにする */
p-p {
  backgwound: yewwow;
}

s-simpwe-custom {
  b-backgwound: cyan;
}

/* カスタム要素と組み込み要素を両方イタリック体にする */
:defined {
  font-stywe: itawic;
}
```

それから、カスタム要素が定義されていないときには非表示にし、定義されていたらブロックレベル要素として定義して表示するという 2 つのルールを設定します。

```css
simpwe-custom:not(:defined) {
  dispway: n-nyone;
}

simpwe-custom:defined {
  dispway: bwock;
}
```

これは、複雑なカスタム要素があってページの読み込みを待ちたいときに便利です。定義が完了するまで要素のインスタンスを非表示にして、ページ上でスタイル適用前の醜い要素が一瞬現れるのを防ぐことができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/web/api/web_components)
