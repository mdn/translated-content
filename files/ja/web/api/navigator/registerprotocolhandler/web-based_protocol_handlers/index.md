---
title: ウェブベースのプロトコルハンドラー
slug: Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers
---

## 背景

ウェブページで `http` ではないプロトコルを使用したリソースへのリンクを見つけることがよくあります。例えば、 `mailto:` プロトコルです。

```html
<a href="mailto:webmaster@example.com">ウェブマスター</a>
```

ウェブ制作者は、ユーザーがウェブページから直接 E メールを送るのに便利な方法を提供したいときに、 `mailto:` リンクを用いることができます。リンクがアクティブ化されたとき、ブラウザーは、E メールを扱うための標準のデスクトップアプリケーションを起動させるはずです。これは、<em>デスクトップベース</em> プロトコルハンドラーと考えることができます。

ウェブベースプロトコルハンドラーは、ウェブベースアプリーケーションもその処理に追加することを可能にします。これはアプリケーションをウェブに移行させるうえでますます重要になってきています。実際、 `mailto` リンクを処理できる可能性がある多くのウェブベースの E メールを扱うアプリケーションが存在しています。

## 登録

ウェブアプリケーションをプロトコルハンドラーとして設定するのは、難しい処理ではありません。基本的に、ウェブアプリケーションは自身を指定したプロトコルのための可能なハンドラーとしてブラウザーに登録するために [`registerProtocolHandler()`](/ja/docs/Web/API/Navigator/registerProtocolHandler) を使用します。

```js
navigator.registerProtocolHandler("web+burger",
                                  "http://www.google.co.uk/?uri=%s",
                                  "Burger handler");
```

ここでの引数は次の通りです。

- プロトコル。
- URL のテンプレート。 "%s" は、リンクの `href` 属性の値に置換され、 GET が置換後の URL に対して実行されます。
- プロトコルハンドラーのためのユーザーにわかりやすい名前。

ブラウザーがこのコードを実行するとき、ユーザーにプロンプトを表示し、そのプロトコルのためのハンドラーとしてそのウェブアプリケーションを登録して良いかどうかの許可を求めるはずです。 Firefox は、情報バー領域に以下のプロンプトを表示します。

![](protocolregister.png)

> **メモ:** URL テンプレートが提供されるとき、登録する URL は登録が行われようとするウェブページと同じドメインである**必要があります**。異なるドメインであった場合は、登録は失敗します。 例えば `http://example.com/homepage.html` では `http://example.com/handle_mailto/%s` はプロトコルハンドラーとして登録可能ですが、 `http://example.org/handle_mailto/%s` はプロトコルハンドラーとして登録することはできません。

同じプロトコルハンドラーを 2 回以上登録すると、そのプロトコルハンドラーが既に登録済みであることを示す別のポップアップが表示されます。従って、プロトコルハンドラーの登録を呼び出すのを防ぐために、以下のように既に登録済みであるかどうかを確認するのが良いでしょう。

### 例

```js
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
  <title>ウェブプロトコルハンドラーサンプル - 登録</title>
  <script type="text/javascript">
    navigator.registerProtocolHandler("web+burger",
                                  "http://www.google.co.uk/?uri=%s",
                                  "Burger handler");
  </script>
</head>
<body>
  <h1>ウェブプロトコルハンドラーサンプル</h1>
  <p>このウェブページは、 <code>web+burger:</code> プロトコルのためのウェブプロトコルハンドラーをインストールします。</p>
</body>
</html>
```

## 有効化

登録すると、ユーザーが登録されたプロトコルを用いたリンクを有効化したときに、ブラウザーはウェブアプリケーションが登録されたときに提供された URL へアクションを送るようになります。Firefox は、既定では、アクションを実行する前にユーザーにプロンプトを表示します。

### 例

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
  <title>ウェブプロトコルハンドラーサンプル - テスト</title>
</head>
<body>
  <p>前に<a href="web+burger:cheeseburger">これ</a>を見たことがありますか？</p>
</body>
</html>
```

## 処理

次の段階は、アクションを処理することです。ブラウザーはアクティブ化されたリンクから `href` 属性の値を展開し、ハンドラー登録時に提供された URL テンプレートと結合し、その URL 上で HTTP GET を行います。ですから、上記の例では、ブラウザーは、次の URL 上で GET を行います。

```
http://www.google.co.uk/?uri=web+burger:cheeseburger
```

サーバー側コードは、クエリー文字列の引数を展開し、要求されたアクションを行います。

> **メモ:** サーバー側コードには `href` 属性の値の**全体**が渡されます。つまり、サーバー側コードは、そのデータからプロトコルを解釈しなければならないということです。

### 例

```php
<?php
$value = "";
if ( isset ( $_GET["value"] ) ) {
  $value = $_GET["value"];
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
    <title>ウェブプロトコルハンドラーサンプル</title>
</head>
<body>
  <h1>ウェブプロトコルハンドラーサンプル - ハンドラー</h1>
  <p>このウェブページは、 <code>web+burger:</code> プロトコルアクションを処理したときに呼び出されます。送られたデータは次の通りです。</p>
  <textarea>
<?php echo(htmlspecialchars($value, ENT_QUOTES, 'UTF-8')); ?>
  </textarea>
</body>
</html>
```

## 参考文献

- [http://www.w3.org/TR/2011/WD-html5-20110525/timers.html#custom-handlers](https://www.w3.org/TR/2011/WD-html5-20110525/timers.html#custom-handlers)

## 関連情報

- `nsIProtocolHandler` (XUL のみ)
- [RegisterProtocolHandler Enhancing the Federated Web](https://blog.mozilla.org/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) at Mozilla Webdev
- [Register a custom protocolHandler](https://web.dev/registering-a-custom-protocol-handler/) at web.dev.
