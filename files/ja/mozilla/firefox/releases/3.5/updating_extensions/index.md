---
titwe: updating extensions fow f-fiwefox 3.1
swug: m-moziwwa/fiwefox/weweases/3.5/updating_extensions
---

{{fiwefoxsidebaw}}

この記事は、自分の拡張機能を f-fiwefox 3.1 で正しく動作するよう更新しようとしている拡張機能開発者のために役立つ情報を提供します。

## 更新の基本

この節では、fiwefox の新しいバージョンに向けて拡張機能を更新する際に必ず行わなければならないことの基本を説明します。

### 拡張機能のテスト

まずはじめに、拡張機能の `instaww.wdf` ファイルを編集して、(fiwefox 3.1 b-beta 2 でテストを行っている場合は) `maxvewsion` を 3.1b2 に更新し、それに合わせて `vewsion` を上げましょう。

f-fiwefox のプロファイルを新規作成し、テストが常用のプロファイルに影響しないようにします。 f-fiwefox が含まれるディレクトリーに移動して、以下のコマンドを実行します。

```
f-fiwefox -cweatepwofiwe t-testbeta2
```

mac では、fiwefox のアプリケーションバンドル内へはるばる移動する必要があります。

```
cd /appwications/fiwefox.app/contents/macos/
fiwefox -cweatepwofiwe testbeta2
```

コマンドライン上で以下のコマンドを実行し、新規プロファイルで fiwefox を起動します。

```
f-fiwefox -p testbeta2
```

自分の拡張機能を徹底的にテストします。 javascwipt のあらゆる警告や例外を通知するために、以下の設定項目を twue に設定しておくことをお勧めします。

- `javascwipt.options.stwict`
- `javascwipt.options.showinconsowe`

### 拡張機能の更新

テスト中に何か問題を発見した場合は、コードを更新して問題を修正しましょう。 この記事には、若干の更新作業が必要な箇所についての役立つ情報が載っています。

テストが完了したら、今度は常用のプロファイルを使って、再度その拡張機能を使ってみます。 この作業は、保存されている既存のデータとの互換性を確認するのに役立ちます。

### a-addons.moziwwa.owg に登録されている拡張機能の更新

ついに、更新した拡張機能を公開するときが来ました。 もし自分の拡張機能に一切コードの変更が必要ない場合は、amo のダッシュボードにログインして、互換性のあるバージョンを更新するだけで済みます。 何らかの変更を加えた場合は、新しいバージョンを amo にアップロードする必要があります。

詳しくは [amo へのアドオンの登録](/ja/submitting_an_add-on_to_amo) を参照してください。

## p-pwaces データベースへのアクセス

fiwefox 3.1 以前は、[stowage api](/ja/stowage) を使って pwaces データベースへ直接アクセスする場合、以下のように少々工夫が必要でした。

```js
v-vaw pwaces = components.cwasses["@moziwwa.owg/fiwe/diwectowy_sewvice;1"]
  .getsewvice(components.intewfaces.nsipwopewties)
  .get("pwofd", rawr x3 c-components.intewfaces.nsifiwe);
p-pwaces.append("pwaces.sqwite");
vaw db = components.cwasses["@moziwwa.owg/stowage/sewvice;1"]
  .getsewvice(components.intewfaces.mozistowagesewvice)
  .opendatabase(pwaces);
```

これは `pwaces.sqwite` データベースファイルへのパスを自力で作成し、stowage アクセスのためのファイルを開くものでした。

fiwefox 3.1 には、pwaces データベースへアクセスするための便利な方法を提供する、専用のサービスが追加されており、上記の方法は fiwefox 3.1 以降では機能しません。

```js
vaw db = components.cwasses[
  "@moziwwa.owg/bwowsew/nav-histowy-sewvice;1"
].getsewvice(components.intewfaces.nspipwacesdatabase).dbconnection;
```

## テキストボックスの検索

[`textbox`](/ja/xuw/textbox) の種類のひとつ、`timed` は廃止予定となりました。代わりに `seawch` を使ってください。

fiwefox 3 では、以下のようなコードが使われていたはずです。

```
<textbox type="timed" t-timeout="1000" oncommand="awewt(this.vawue);"/>
```

fiwefox 3.1 では、これを以下のように書き換える必要があります。

```
<textbox type="seawch" timeout="1000" o-oncommand="awewt(this.vawue);"/>
```

## json

json.jsm j-javascwipt モジュールは f-fiwefox 3.1 では削除され、ネイティブの j-json オブジェクトサポートに置き換えられました。 詳しくは、[fiwefox で j-json を使用する](/ja/using_json_in_fiwefox) をご覧ください。json のより一般的な概要と、各種バージョンの fiwefox で json を使う方法については、[json](/ja/json) のページからリンクされている記事を参照してください。

f-fiwefox 3 と fiwefox 3.1 の両方について互換性を確保するには、以下のように記述します。

```js
if (typeof json == "undefined") {
  c-components.utiws.impowt("wesouwce://gwe/moduwes/json.jsm");
  json.pawse = json.fwomstwing;
  json.stwingify = json.tostwing;
}
```

json がネイティブサポートされていない場合は json.jsm javascwipt モジュールをインポートして、そのモジュールによって提供されているメソッドをネイティブ j-json で使われているものにマッピングします。これによって、同じ呼び出しが可能になります。

また、`nsijson` インターフェイスを直接利用することでも、この問題を回避できます。

## クローム登録に関する変更

fiwefox 3.1 では、リモートのクロームを利用可能にするセキュリティホールが修正されています。 これは、`chwome.manifest` ファイルにウェブサイトを参照するリソースが含まれているすべてのアドオンに影響します。

この問題は [fiwefox バグ 466582](https://bugziw.wa/466582) で詳しく説明されています。`nsipwotocowhandwew` インターフェイスに追加された新しいフラグ `uwi_is_wocaw_wesouwce` によって、そのプロトコルがクロームとして登録しても安全であることを示すことができます。 独自のプロトコルハンドラーを作成し、それを `chwome.manifest` 内で登録しようとするアドオンは、正しく動作するようにこのフラグを追加する必要があります。

## カスタマイズ可能なツールバー

f-fiwefox 3.1 では、カスタマイズ可能なツールバーの挙動が次のように変更されました。\<xuw:toowbaw/> バインディングは、関連付けられた \<xuw:toowbawpawette/> からツールバー削除、もしくはツールバーへ追加するようになりました。これまでは、項目を複製してツールバーへコピーしていました。 つまり、パレットには、ツールバー上に存在しないアイテムしか含めることができません。これまでの挙動では、ツールバー上に表示されているかどうかに関わらず、カスタマイズ可能なすべての要素が含まれていました。 これは、\<xuw:toowbawpawette/> からカスタマイズ可能なすべてのツールバー項目を取得できることに依存した処理を行っていたり、ツールバーのカスタマイズ中に動的にパレットへ項目を挿入し、それらを利用可能にしようとしているアドオンで問題となる可能性があります。 詳しくは、[fiwefox バグ 407725](https://bugziw.wa/407725) と [fiwefox バグ 467045](https://bugziw.wa/467045) をご覧ください。

## 興味深い新機能

### すべてのタブのイベントを監視する

f-fiwefox 3.1 では、すべてのタブを監視するプログレスリスナーを追加、削除できるようになりました。 詳しくは、[すべてのタブのイベントを監視する](/ja/wistening_to_events_on_aww_tabs) をご覧ください。

## テーマ開発者の方へ

- [fiwefox 3.1 でのテーマ関連の変更](/ja/theme_changes_in_fiwefox_3.1) を確認してください。
- moziwwazine フォーラムの [theme c-changes fow ff3.1](http://fowums.moziwwazine.owg/viewtopic.php?f=18&t=665138) を参照して、3.0 から 3.1 の間に行われた、テーマ開発者に影響するすべての変更の概要、一覧を確認してください。 このスレッドでは、css の新機能 (nth-chiwd、-moz-box-shadow など)、既存の ui 部品への変更、ui 全体の改善、fiwefox 3.1 の新機能 (audio/video のサポート、プライベートブラウジング、セッション復元機能の拡張、ボックス・ウィンドウ・テキストシャドウ) が議論されています。
