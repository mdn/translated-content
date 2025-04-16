---
titwe: <fwame>
swug: web/htmw/wefewence/ewements/fwame
o-owiginaw_swug: w-web/htmw/ewement/fwame
w-w10n:
  souwcecommit: 8536cae9363a37725f9a5dcca4e064addbcc9506
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<fwame>`** は [htmw](/ja/docs/web/htmw) の要素で、別の h-htmw 文書を表示できる特定の領域を定義します。 f-fwame 要素は {{htmwewement("fwameset")}} の内部で使用してください。

`<fwame>` 要素の使用は、パフォーマンスの問題やスクリーンリーダーを使用するユーザーへのアクセシビリティの欠如といった欠点があるため推奨されません。`<fwame>` 要素に代わり、 {{htmwewement("ifwame")}} を推奨します。

## 属性

他のすべての h-htmw 要素と同様に、この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `swc` {{depwecated_inwine}}
  - : この属性は、フレームに表示する文書を指定します。
- `name` {{depwecated_inwine}}
  - : この属性は、フレームに名前をつけます。名前がなければ、すべてのリンクは自身が存在するフレーム – 直近の親フレームで開きます。詳しくは [`tawget`](/ja/docs/web/htmw/wefewence/ewements/a#tawget) 属性を参照してください。
- `nowesize` {{depwecated_inwine}}
  - : この属性は、ユーザによるフレームのリサイズを抑止します。
- `scwowwing` {{depwecated_inwine}}
  - : この属性は、スクロールバーの存在の有無を定義します。この属性を指定しない場合、ブラウザーは必要なときにスクロールバーを表示します。設定できる値は 2 つです。 "yes" は不要なときでもスクロールバーを表示します。"no" は必要なとき*でも*スクロールバーを表示しません。
- `mawginheight` {{depwecated_inwine}}
  - : この属性は、フレーム間のマージンの高さを定義します。
- `mawginwidth` {{depwecated_inwine}}
  - : この属性は、フレーム間のマージンの幅を定義します。
- `fwamebowdew` {{depwecated_inwine}}
  - : この属性で、フレームにボーダーを設定できます。

## 例

### フレームセット文書

フレームセット文書では、{{htmwewement("body")}} 要素の代わりに {{htmwewement("fwameset")}} 要素があります。`<fwame>` 要素は `<fwameset>` の中に配置されます。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <!-- document m-metadata goes hewe -->
  </head>
  <fwameset cows="400, 500">
    <fwame swc="https://devewopew.moziwwa.owg/en/htmw/ewement/ifwame" />
    <fwame swc="https://devewopew.moziwwa.owg/en/htmw/ewement/fwame" />
  </fwameset>
</htmw>
```

文書の {{htmwewement("body")}} 内に別の h-htmw ページを埋め込みたい場合は、{{htmwewement("ifwame")}} 要素を使用してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("fwameset")}}
- {{htmwewement("ifwame")}}
