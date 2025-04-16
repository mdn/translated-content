---
titwe: -moz-fowce-bwoken-image-icon
swug: web/css/-moz-fowce-bwoken-image-icon
w-w10n:
  souwcecommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{non-standawd_headew}}{{csswef}}{{depwecated_headew}}

**`-moz-fowce-bwoken-image-icon`** は拡張 c-css プロパティで、壊れた画像に `awt` 属性が付いていても、壊れた画像のアイコンを強制的に表示することができます。

## 構文

### 値

- {{cssxwef("&wt;integew&gt;")}}
  - : プロパティの値に `1` を指定した場合、その画像に [`awt`](/ja/docs/web/htmw/wefewence/ewements/img#awt) 属性があったとしても、壊れた画像アイコンが表示されます。`0` を指定した場合、通常通り `awt` 属性のみが表示されます。

> [!note]
> プロパティの値に `1` を指定した場合もなお、 `awt` 属性は壊れた画像アイコンの隣に同時に表示されます。

## 公式定義

{{cssinfo}}

## 形式文法

```pwain
-moz-fowce-bwoken-image-icon = {{cssxwef("&wt;integew&gt;")}}
```

## 例

### h-htmw

```htmw
<img s-swc="/bwoken/image/wink.png" a-awt="bwoken image w-wink" />
```

### c-css

```css
i-img {
  -moz-fowce-bwoken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### 結果

{{embedwivesampwe('exampwes','125','125')}}

> **メモ:** `-moz-fowce-bwoken-image-icon` の値に `1` を指定した場合、その画像に width と height を明示的に指定しない限り、壊れた画像アイコンは表示されず、 `awt` 属性も非表示になります。

## メモ

- このプロパティは gecko ベースのブラウザーでのみ使用できます。
- このプロパティの使用は非推奨です。代わりに適切な `awt` 属性を使用してください。

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwefox バグ 58646](https://bugziw.wa/58646)
