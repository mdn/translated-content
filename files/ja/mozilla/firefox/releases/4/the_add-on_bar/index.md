---
title: アドオンバー
slug: Mozilla/Firefox/Releases/4/The_add-on_bar
---

Firefox 4 よりウィンドウの下部に新しいツールバーを実装する為、ブラウザウィンドウの下部からステータスバーが削除されます。この新しいツールバーは ID "addon-bar" を持った、標準の XUL `<toolbar>` です。アドオンはこのバーにコンテンツを挿入することが可能であり、また、ユーザーはツールバーのカスタマイズ中にボタンをアドオンバーにドラッグすることができます。これがアドオンバーと旧ステータスバーの間の主な相違点です。標準のツールバーであるため、どの XUL 要素でもアドオンバーに配置することができます。

> **メモ:** 当面は、Firefox にはステータスバーが存在することを期待するアドオンがうまく動作するようにするためのシムが噛ませてあります。但しこれは一時的な措置であり、じきに削除されます。アドオンをアップデートしてください。

## アドオンバーに要素を加える

アドオンバーは ID "addon-bar" を持つ XUL ツールバーです。次のコードは、一番最近使われたウィンドウを探し出し、XUL `<label>` 要素を用いて単に "Hello world!" のテキストを表示する新しいアイテムをアドオンバーに加えます。

```js
// 一番最近使われたウィンドウを探す

var mediator = Components.classes[
  "@mozilla.org/appshell/window-mediator;1"
].getService(Components.interfaces.nsIWindowMediator);
var doc = mediator.getMostRecentWindow("navigator:browser").document;

// そのウィンドウのアドオンバーを取得する
var addonBar = doc.getElementById("addon-bar");

// 新しいツールバーアイテムを構築する
var newItem = doc.createElement("toolbaritem");
var itemLabel = doc.createElement("label");

// アイテムをツールバーに追加しテキストラベルをセットする
newItem.appendChild(itemLabel);
addonBar.appendChild(newItem);
itemLabel.value = "Hello world!";
```

To add the button only once create a bool pref to check if it is the first run. [For example](http://stackoverflow.com/questions/4978188/how-do-i-detect-a-first-run-in-firefox-a-addon/4978512#4978512):

```js
var firstrun = Services.prefs.getBoolPref("extensions.YOUREXT.firstrun");

var curVersion = "0.0.0";

if (firstrun) {
  Services.prefs.setBoolPref("extensions.YOUREXT.firstrun", false);
  Services.prefs.setCharPref("extensions.YOUREXT.installedVersion", curVersion);
  /* Code related to firstrun */
} else {
  try {
    var installedVersion = Services.prefs.getCharPref(
      "extensions.YOUREXT.installedVersion",
    );
    if (curVersion > installedVersion) {
      Services.prefs.setCharPref(
        "extensions.YOUREXT.installedVersion",
        curVersion,
      );
      /* Code related to upgrade */
    }
  } catch (ex) {
    /* Code related to a reinstall */
  }
}
```

## Firefox の各バージョンでのオーバーレイの使用方法

Firefox 3.6 とそれ以前のバージョンとの互換性を保持したままアドオンバーのサポートを追加するには、2 つのオーバーレイを使用する必要があります。
The [chrome.manifest](/ja/docs/Chrome_Registration) file can specify which file is used by which Firefox version by using [manifest flags](/ja/docs/Chrome_Registration#Manifest_flags):

```
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlayold.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion<4.0
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion>=4.0
```

注記: the appversion has to be at least 2 digits long or it won't work with versions of Gecko before 1.8.0.13 and 1.8.1.5.

### デフォルトでボタンを追加

参照 : [Adding a button by default](/ja/docs/Code_snippets/Toolbar#Adding_button_by_default)

## 見た目の違い

- ブラウザーがステータス情報によりバー領域の大半を占拠することがなくなるので、すべての領域をアドオンが使えるようになります。
- 既定ではアドオンバーは空 (empty) であり、隠されています (hidden) 。ユーザーがこれを可視状態にするには、明示的にそうしなければなりません。
- 再起動不要のアドオンがアドオンバーに直接インストールされたとき、アドオンバーが可視でなければアドオンバーは自動的に可視になります。
- 再起動不要のアドオンがアンインストールされてアドオンバー内のアイテムの数がゼロになったときには、アドオンバーは自動的に隠されます。

## 関連情報

- [Firefox 4 add-on bar for developers](http://mike.kaply.com/2011/01/25/the-firefox-4-add-on-bar-for-developers) by Mike Kaply
