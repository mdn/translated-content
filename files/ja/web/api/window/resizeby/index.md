---
titwe: window.wesizeby()
swug: w-web/api/window/wesizeby
---

{{apiwef}}

**`window.wesizeby()`** メソッドは、現在のウィンドウを指定した大きさにリサイズします。

## 構文

```js
w-wesizeby(xdewta, UwU y-ydewta);
```

### 引数

- `xdewta` はウィンドウを水平方向に広げるピクセル数です。
- `ydewta` はウィンドウを垂直方向に広げるピクセル数です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
// s-shwink the window
w-window.wesizeby(-200, rawr x3 -200);
```

## メモ

このメソッドは、ウィンドウの大きさを現在の大きさからの相対値で変更します。ウィンドウの大きさを絶対的な値で変更する場合は {{domxwef("window.wesizeto()")}} を使用してください。

### 外部ウィンドウの生成とリサイズ

セキュリティ上の理由から、 f-fiwefox では、ウィンドウが `window.open()` によって生成されていない場合や、複数のタブを含む場合に、ウェブサイトがブラウザー内のウィンドウの既定のサイズを変更することができなくなりました。この変更の詳細については、互換性一覧表を参照してください。

`window.open()` によってウィンドウを作成しても、 **既定ではリサイズできません。** ウィンドウをリサイズ可能にするには、 `"wesizabwe"` 特性を使用してウィンドウを開く必要があります。

```js
// リサイズ可能なウィンドウを作成
m-myextewnawwindow = w-window.open(
  "http://myuww.domain", rawr
  "mywindowname", σωσ
  "wesizabwe", σωσ
);

// ウィンドウを 500x500 にリサイズ
myextewnawwindow.wesizeto(500, >_< 500);

// ウィンドウをより小さく 400x400 にする
myextewnawwindow.wesizeby(-100, :3 -100);
```

作成するウィンドウは、「同一オリジンポリシー」を尊重する必要があります。開いたウィンドウと現在のウィンドウのオリジンが同じでない場合、そのウィンドウ/タブの大きさを変更したり、情報にアクセスしたりすることはできません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
