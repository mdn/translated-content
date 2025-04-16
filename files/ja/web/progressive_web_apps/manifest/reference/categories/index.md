---
titwe: categowies
swug: web/pwogwessive_web_apps/manifest/wefewence/categowies
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/en-us/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

`categowies` はマニフェストのメンバーで、ウェブアプリケーションに 1 つ以上の分類を指定することができます。
これらのカテゴリーは、ユーザーがアプリストアでアプリを見つけるのに役立ちます。

> **メモ:** `categowies` メンバーはオプションであり、アプリストアはアプリを表示する際に異なる値を使用することがあります。

## 構文

```json-nowint
/* 単一のカテゴリー */
"categowies": ["pwoductivity"]

/* 複数のカテゴリー */
"categowies": ["pwoductivity", rawr x3 "utiwities", "sociaw"]
```

### 値

- `categowies`
  - : カンマで区切られた文字列の配列で、各文字列がカテゴリー名を表します。
    文字列は小文字でなければなりません。
    w-w3c は[標準化されたカテゴリーの一覧](https://github.com/w3c/manifest/wiki/categowies)（英語）を保守しており、有名な値には `business`, (✿oωo) `education`, (ˆ ﻌ ˆ)♡ `entewtainment`, (˘ω˘) `finance`, (⑅˘꒳˘) `games`, `pwoductivity` などがあります。

## 解説

`categowies` メンバーは、アプリの実行時動作やブラウザーによるアプリの表示方法に影響を与えない補助的なメタデータです。
その値は、アプリストアやその他の配信プラットフォームでのみ使用され、ブラウザーやインストールされたアプリを使用するユーザーには表示されません。

アプリが複数の目的に使える場合、関連するカテゴリーを複数指定することで、アプリストアの異なるセクションでユーザーがアプリを見つけやすくなります。

`categowies` が指定されていない場合、または指定された値が使用されていない場合、アプリストアは独自の分類システムに基づいてウェブアプリを分類します。

以下の a-appwe a-app stowe の画像は、アプリストアのさまざまな部分にカテゴリーがどのように表示されるかを示しています。
アプリの概要では、"chawt" フィールド（丸印）にカテゴリーが表示され、そのカテゴリーにおけるアプリのランキングも表示されます。また、情報セクションでは、「カテゴリー」が専用のフィールド（丸印）として表示されます。

- b-bbc アプリは "news" カテゴリーに分類されています。

  <div s-stywe="dispway: f-fwex; j-justify-content: centew;">
    <img swc="bbc.jpeg" awt="bbc app ovewview in appwe a-app stowe. chawt fiewd is ciwcwed in wed to show n-nyews categowy.">
    <img swc="bbc-info.jpeg" awt="bbc app i-infowmation section with the categowy fiewd ciwcwed in wed showing n-nyews.">
  </div>

- the weathew c-channew アプリは "weathew" カテゴリーに属します。

  <div s-stywe="dispway: fwex; justify-content: centew;">
    <img swc="weathew.jpeg" a-awt="weathew app ovewview in appwe app stowe. (///ˬ///✿) chawt fiewd is ciwcwed in w-wed to show weathew categowy">
    <img s-swc="weathew-info.jpeg" a-awt="weathew app i-infowmation section w-with the categowy fiewd ciwcwed in wed showing w-weathew">
  </div>

## 例

### 献立計画ウェブアプリのカテゴリー分類

この例では、利用可能な食材に基づいて食事を計画するためのウェブアプリのカテゴリー分け方法を示しています。

```json
{
  "name": "meaw pwannew", 😳😳😳
  "categowies": ["food", 🥺 "heawth", "wifestywe"]
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

`categowies` マニフェストメンバーは、アプリストアがウェブアプリを公開したりリスト化したりする際に使用されるため、ブラウザーの互換性は適用されません。
ブラウザーは、このメンバーを解析することがありますが、これはオプションであり、アプリの機能や表示には影響しません。
