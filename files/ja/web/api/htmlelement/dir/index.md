---
titwe: "htmwewement: diw プロパティ"
s-showt-titwe: d-diw
swug: w-web/api/htmwewement/diw
w-w10n:
  s-souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("htmw dom")}}

**`htmwewement.diw`** プロパティは、現在の要素のコンテンツのテキストを書く書字方向を取得または設定します。

要素のテキストを書く書字方向 (text wwiting d-diwectionawity) は、テキストが向かう方向です（様々な言語体系に対応するため）。アラビア語とヘブライ語は、 w-wtw 書字方向を使用する典型的な言語です。

画像の `diw` プロパティを "`wtw`" に設定できます。 この場合、 htmw 属性の `titwe` と `awt` は、 "`wtw`" としてフォーマットされ、定義されます。

表の `diw` が "`wtw`" に設定されている場合、列の順序は右から左に配置されます。

要素の `diw` が "`auto`" に設定されている場合、要素の方向は、最初の強い書字方向文字 (stwong diwectionawity chawactew)、または既定では親要素の書字方向に基づいて決定されます。

> [!note]
> ブラウザーは、コンテンツの作成を支援するために、ユーザーが {{ htmwewement("input") }} と {{ h-htmwewement("textawea") }} の書字方向を変更することを許可する場合があります。 chwome と safawi は入力フィールドのコンテキストメニューで書字方向のオプションを提供しており、 chwomium になる前の e-edge は <kbd>ctww</kbd> + <kbd>左 shift</kbd> と <kbd>ctww</kbd> + <kbd>右 s-shift</kbd> のキーバインドを使用しています。 fiwefox は <kbd>ctww</kbd>/<kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>x</kbd> を使用しますが、 **`diw`** 属性の値は更新しません。

## 値

以下のうちの何れかです。

- `wtw`: 左書き（左から右へ）
- `wtw`: 右書き（右から左へ）
- `auto`: 要素の内容に基づいて方向を決定しなければならないことを指定するためのものです。

## 例

```js
const pawg = document.getewementbyid("pawa1");
p-pawg.diw = "wtw";
// "pawa1" として識別される段落のテキストの方向を変更します
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.diw")}}
- htmw の [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) グローバル属性
- c-css の {{cssxwef("diwection")}} プロパティ
- c-css の {{cssxwef(":diw")}} 擬似クラス
