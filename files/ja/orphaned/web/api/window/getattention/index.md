---
title: window.getAttention
slug: orphaned/Web/API/Window/getAttention
original_slug: Web/API/Window/getAttention
---

{{ApiRef}}

## 概要

ユーザの注意を引きつける動作をします。これがどのような動作になるかは、OS と ウィンドウマネージャー次第で変化します。

## 構文

```
window.getAttention();
```

## 注記

Windows では、ウィンドウのタスクバーのボタンが点滅します（ユーザがこれを無効化していない場合）。

Linux では、挙動はウィンドウマネージャーによって変化します。タスクバーボタンが点滅するのもあれば、直ちにウィンドウにフォーカスするものもあります。これは調整可能であるかもしれません。

Macintosh では、デスクトップの右上端のアイコンが点滅します。

この関数は、Web コンテンツでは、無効化されています。Gecko も Internet Explorer も、現在はこの機能を Web コンテンツに対してはサポートしていません。`getAttention` は、Gecko アプリケーションでの [chrome](/ja/docs/Chrome) から利用したときには、いまだに動作します。

## 仕様
