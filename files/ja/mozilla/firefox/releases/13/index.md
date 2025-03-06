---
title: Firefox 13 for developers
slug: Mozilla/Firefox/Releases/13
---

{{FirefoxSidebar}}

Firefox 13 は 米国時間 2012 年 6 月 5 日にリリースされました。この記事は開発者に影響がある Firefox 13 での変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- テーブルの [`cellspacing`](/ja/docs/Web/HTML/Element/table#cellspacing) 属性は、Quirks モード以外でも Quirks モードと同様に解析するようになりました。これは値をパーセント値で指定した場合に、仕様書で実際はパーセント値が認められていないため代わりにピクセル数として扱うものです。
- {{ htmlelement("wbr") }} 要素の双方向テキストに関する動作を修正しました。Unicode の `U+200B ZERO-WIDTH SPACE` 文字と同様の動作になり、従って親要素の双方向性に影響を与えません。
- {{ Cssxref(":invalid") }} 擬似クラスを {{ htmlelement("form") }} 要素へ適用できるようになりました。

### CSS

- {{ cssxref("&lt;angle&gt;") }} の単位 `turn` をサポートしました (`rotate()` などの CSS 関数で用います)。
- {{ cssxref("background-position") }} で値を 3 - 4 個置く構文をサポートしました。"`right 10px bottom 20px`" といった表記で、背景画像を任意の角からずらすことができます。[Firefox バグ 522607](https://bugzil.la/522607) をご覧ください。
- {{ cssxref("background-repeat") }} で値を 2 個置く構文をサポートしました。
- {{ cssxref("border-radius","-moz-border-radius*") }} および {{ cssxref("box-shadow","-moz-box-shadow") }} のサポートを削除しました。代わりに著作者は接頭辞のない `border-radius` または `box-shadow` を使用してください。[Firefox バグ 693510](https://bugzil.la/693510) をご覧ください。
- {{ cssxref("column-fill") }} プロパティが実装されました。（接頭辞付き）

### JavaScript

- ECMAScript 6 の [`for..of`](/ja/docs/JavaScript/Reference/Statements/for...of) 構造をサポートしました。
- ECMAScript 6 の [`Map`](/ja/docs/JavaScript/Reference/Global_Objects/Map) と [`Set`](/ja/docs/JavaScript/Reference/Global_Objects/Set) オブジェクトの実験的サポートを実装しました。

### DOM

- DOM4 の規定により、{{ domxref("Node.cloneNode()") }} メソッドの引数 `deep` は省略可能になりました。
- {{ domxref("window.setTimeout()") }} および {{ domxref("window.setInterval()") }} メソッドは、付加的な引数である "遅延" をコールバックルーチンに渡さないようになりました。
- {{ domxref("Blob","Blob.mozSlice()") }} メソッドの接頭辞を削除しました。
- {{ domxref("Blob") }} コンストラクターをサポートしました。
- [`globalStorage`](/ja/docs/Web/API/Web_Storage_API#globalstorage) のサポートを削除しました。
- バックグラウンドの処理の状態や結果を報告するために用いる {{ domxref("DOMRequest") }} インターフェイスを新たに追加しました。
- {{ domxref("HTMLOptionElement", "HTMLOptionElement.index()") }} メソッドは、{{ HTMLElement("option") }} が {{ HTMLElement("datalist") }} HTML 要素の内部にあるときに誤った値 `-1` ではなく `0` を返すようになりました。
- {{ domxref("DOMException") }} のうち DOM Level 4 で定義された部分を実装しました。
- 最新の File API 仕様での {{ domxref("DOMError") }} の定義に賛同して、{{ domxref("FileError") }} インターフェイスを削除しました。
- {{ domxref("Range") }} オブジェクトは `RangeException` 例外を投げなくなりました。代わりに DOM4 で定義された {{ domxref("DOMException") }} を用います。
- {{ domxref("element.getAttributeNS()") }} は存在しない属性について空の文字列に代わり常に `null` を返すようになりました。以前は、空の文字列が返る場合がありました。存在しない属性には空の文字列ではなく null を返すべきであるという現在の DOM4 仕様に従います。
- {{ domxref("HTMLCanvasElement") }} インターフェイスに非標準の `mozFetchAsStream()` メソッドを追加しました。これは当該要素の画像データを指定した形式で含む入力ストリームを提供します。

### UA 文字列

- Android 版 Firefox は、フォームファクタを示すため [UserAgent 文字列に Tablet または Mobile のトークンを含むようになり](/ja/Gecko_user_agent_string_reference#Mobile_and_Tablet_indicators)、Fennec トークンは持たなくなりました。また "Gecko/" に続く数値は、フリーズした日付から Gecko のバージョン番号に変わります。
- UA 文字列では、Gecko のパッチ番号やリリース状況をバージョン番号で公開しないようになりました。バージョン番号は常に "X.Y" という形式になり、X はメジャーリリース番号、Y はマイナー番号を表します。例えば、"13.0" や "14.1" となります。"14.0.1b1" のようにはなりません。

### SVG

- {{ domxref("SVGStringList") }} DOM インターフェイスが [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) と同様に添字を利用可能になりました。[Firefox バグ 722071](https://bugzil.la/722071) をご覧ください。

### WebGL

- [`EXT_texture_filter_anisotropic`](/ja/WebGL/Using_Extensions#EXT_texture_filter_anisotropic) 拡張のサポートを追加しました。異方性テクスチャフィルタリングは、テクスチャが貼り付けられた斜めのプリミティブを表示する際のミップマップテクスチャのアクセスの品質を向上させます。

### MathML

- {{ MathMLElement("mtable") }} 要素で `width` 属性をサポートしました ([Firefox バグ 722880](https://bugzil.la/722880))。
- 数学的なテキストで [MathJax fonts](http://cdn.mathjax.org/mathjax/latest/fonts/HTML-CSS/TeX/otf/) をデフォルトフォントとして使用するようになりました。詳しくは [Fonts for Mozilla's MathML engine](/ja/Mozilla_MathML_Project/Fonts) をご覧ください。

### Developer tools

#### 3D ビューの改良

- "f" キーを押すと、選択中のノードが見えるように位置を調整することができます。

#### スタイルパネルの改良

- [スタイルパネル](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) でルールの見出しをクリックすると、対応する CSS を [スタイルエディター](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) で開くようになりました。
- [スタイルパネル](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) でルールを右クリックすると、そのルールをクリップボードへコピーできるようになりました。
- 未知のプロパティ名や誤った値を入力すると、プロパティの隣に警告アイコンを表示します。

#### スクラッチパッドの改良

- [スクラッチパッド](/ja/docs/Tools/Scratchpad) のヘルプメニューに、MDN のスクラッチパッドに関する文書を開くための項目を追加しました。

## Mozilla 開発者とアドオン開発者向けの変更点

### 互換性情報

Firefox 13 より、Windows 版の Firefox は Windows XP Service Pack 2 以降を要求します。従って、 Windows 2000 や古いバージョンの Windows XP では動作しません。

### JavaScript code modules

#### source-editor.jsm

- ソースエディターの API に、ダーティフラグのサポートを追加しました。
- ソースエディターは、Orion を利用せずに {{ HTMLElement("textarea") }} へフォールバックする動作をサポートしなくなりました。
- エディターが focus と blue のイベントを公開するようになりました。
- [`getIndentationString()`](/ja/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) メソッドを追加しました。これは、エディターでテキストのインデントに使用する文字を返します。
- ソースエディターで、ブレークポイントのリストの管理とブレークポイントのオン・オフを切り替えるユーザーインターフェイスの表示をサポートしました。ただし実際は、ブレークポイントを実装していません。そのためのデバッガのコードを記述するのはあなた次第です。
- `highlightCurrentLine` 設定オプションを用いて、カレント行をハイライトする機能をサポートしました。

### ARIA

- CSS プロパティ {{ cssxref("margin-left") }}、{{ cssxref("margin-right") }}、{{ cssxref("margin-top") }}、および {{ cssxref("margin-bottom") }} はすべて、同じ名前で ARIA オブジェクトに反映されます。詳しくは [Gecko object attributes](/ja/Accessibility/AT-APIs/Gecko/Attrs) をご覧ください。

### インターフェイスの変更

- `nsIScreen` インターフェイスが、新たに引数 `rotation` を通して回転の制御をサポートしました。
- `nsIPrefBranch2` インターフェイスを `nsIPrefBranch` に統合しました ([Firefox バグ 718255](https://bugzil.la/718255))。
- 以前のバージョンの Gecko で削除されたエイリアス `MozOpacity`、`MozOutline`、`MozOutlineStyle`、`MozOutlineWidth`、`MozOutlineOffset`、および `MozOutlineColor` を、`nsIDOMCSS2Properties` から削除しました。これは、エイリアスを削除した当初に行うべきでした。
- `nsINavHistoryQueryOptions` の属性 `excludeItemIfParentHasAnnotation` を、対応するクエリー操作と共に削除しました。これはライブブックマークのサポート用に存在しましたが、もはや存在しません。

## 関連記事

{{Firefox_for_developers('12')}}
