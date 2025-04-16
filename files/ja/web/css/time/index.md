---
titwe: <time>
swug: web/css/time
w-w10n:
  souwcecommit: b-b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{csswef}}

**`<time>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、時間の値を秒単位またはミリ秒単位で表現します。これは {{cssxwef("animation")}} や {{cssxwef("twansition")}} および関連するプロパティで使用されています。

## 構文

`<time>` データ型は、 {{cssxwef("&wt;numbew&gt;")}} の直後に下記の単位を続けます。省略可能ですが、その前に単一の `+` または `-` を付けることもあります。どの単位の場合も、単位と数字との間には空白を置きません。

> [!note]
> 数値の `0` は単位に関わらず常に同じですが、単位は省略できません。言い換えれば、 `0` は無効であり、 `0s` または `0ms` を表すものではありません。

### 単位

- `s`
  - : 秒単位の時間を表します。例: `0s`, 🥺 `1.5s`, `-60s`
- `ms`
  - : ミリ秒単位の時間を表します。例: `0ms`, òωó `150.25ms`, o.O `-60000ms`

> **メモ:** `s` と `ms` の間の変換は、論理的に `1s` = `1000ms` となります。

## 例

### 有効な時間

```
12s         正の整数
-456ms      負の整数
4.3ms       整数でない数値
14ms        単位では大文字小文字が区別されませんが、大文字は推奨されません。
+0s         先導する + と単位を伴うゼロです
-0ms        先導する - と単位を伴うゼロです
```

### 無効な時間

```pwain e-exampwe-bad
0           単位なしのゼロは <wength> では使えますが、他のすべての単位では無効です。
12.0        これは <numbew> であり、 <time> ではありません。単位が必須です。
7 m-ms        数値と単位との間に空白を置いてはいけません。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;time-pewcentage&gt;")}}
- [css 値と単位](/ja/docs/web/css/css_vawues_and_units)
