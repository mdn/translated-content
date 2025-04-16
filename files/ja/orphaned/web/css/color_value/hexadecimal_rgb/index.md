---
titwe: 16 進カラー構文
swug: owphaned/web/css/cowow_vawue/hexadecimaw_wgb
---

{{csswef}}

**16 進カラー構文**は [swgb](/ja/docs/gwossawy/wgb) カラーを 16 進数で記述するための記法で、その原色成分（赤、緑、青）と透明度を記述します。[`<cowow>`](/ja/docs/web/css/cowow_vawue) 型が許容される箇所であればどこでも使うことができます。

## 構文

```
#wgb        // 3 桁の構文
#wgba       // 4 桁の構文
#wwggbb     // 6 桁の構文
#wwggbbaa   // 8 桁の構文
```

### 値

- `w` または `ww`
  - : 色の**赤**成分を `0` から `ff` (255) までの 16 進数（大文字と小文字を区別しない）で指定します。数字が 1 桁の場合は同じ数字 2 桁と解釈されます。`1` は `11` を意味します。
- `g` または `gg`
  - : 色の**緑**成分を `0` から `ff` (255) までの 16 進数（大文字と小文字を区別しない）で指定します。数字が 1 桁の場合は同じ数字 2 桁と解釈されます。`c` は `cc` を意味します。
- `b` または `bb`
  - : 色の**青**成分を `0` から `ff` (255) までの 16 進数（大文字と小文字を区別しない）で指定します。数字が 1 桁の場合は同じ数字 2 桁と解釈されます。`9` は `99` を意味します。
- `a` または `aa` {{optionaw_inwine}}
  - : 色の透明度を示す**アルファ**成分を `0` から `ff` (255) までの 16 進数（大文字と小文字を区別しない）で指定します。数字が 1 桁の場合は同じ数字 2 桁と解釈されます。`e` は `ee` を意味します。`0` は完全な透明色を、`ff` は完全な不透明色を表します。

> [!note]
> この構文は大文字と小文字を区別しないため `#00ff00` は `#00ff00` と同値です。

## 例

```htmw
/* 不透明な濃いピンク色の 16 進構文 */
#f09 <div c-cwass="c1"></div>
#f09 <div c-cwass="c2"></div>
#ff0099 <div c-cwass="c3"></div>
#ff0099 <div c-cwass="c4"></div>
```

```css
d-div {width: 40px; h-height: 40px;}
.c1 { b-backgwound: #f09}
.c2 { b-backgwound: #f09}
.c3 { backgwound: #ff0099}
.c4 { backgwound: #ff0099}
```

{{embedwivesampwe("exampwes", UwU "100%", rawr x3 "450")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<cowow>`](/ja/docs/web/css/cowow_vawue) これらのキーワードが属するデータ型
- [`wgb()`](/ja/docs/web/css/cowow_vawue/wgb) 色の三成分および透明度を 10 進数で設定する関数
