---
title: WebIDL ファイルに含まれる情報
slug: MDN/Writing_guidelines/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file
---

{{MDNSidebar}}

API についての記事を書くとき、情報源はたくさんあります。仕様書にはモデルと同様に何が実装されるべきかが記述され、実装には実際にブラウザーに置かれたものが記述されています。 WebIDL ファイルは、 API に関する情報のすべてではありませんが、多くの情報を提供する非常に凝縮された方法です。この記事では、 WebIDL 構文を理解するためのリファレンスを提供します。

IDL は **_Interface Definition Language_** の略で、 API を記述するために設計されています。広いコンピューターの世界では、 IDL はいくつかの種類に分かれています。ブラウザーの世界では、私たちが使っている IDL は _WebIDL_ と呼ばれています。 WebIDL には、 WebIDL 仕様書で規定されているものと、ブラウザーに実装されているものの 2 種類があります。仕様書は標準的なリファレンスで、ブラウザーの WebIDL は特定のブラウザーで実際に実装されているものを記述し、アノテーション、非標準の要素に関する情報、 IDL 仕様に対するブラウザー固有の拡張などの追加事項を含んでいます。

## WebIDL ファイルの場所

WebIDL は複数の場所で見つけることができます。

- それぞれの仕様書には、本文の中に WebIDL が含まれています：これは、正確な定義を伝えるのにとても便利な方法です。これらは、API の構文を記述しています。正規のリファレンスではありますが、実際の実装とは異なる可能性があることを念頭に置いておく必要があります。 MDN では、実用的でありたいと考えており、ウェブプラットフォームが実際にどうであるか、理想的にどうあるべきかを文書化するものではありません。ですから、そこにあるものを実装でダブルチェックしてください（そして、矛盾を発見したら遠慮なくバグを報告してください）。

- 3 つのブラウザーエンジンが、ツールチェーンの一部として（修正された） WebIDL を使用しています。 Gecko、Chromium/Blink、そして WebCore/WebKit です。 Chromium 以前の Edge では内部的に WebIDL を使用していましたが、残念ながらこれらは公開されていません。

  - Gecko では、すべての WebIDL ファイルは 1 つのディレクトリー <https://dxr.mozilla.org/mozilla-central/source/dom/webidl/> にまとめられています。拡張子は `.webidl` です。Gecko のソースツリーには他にも `*.idl` ファイルがありますが、それらは WebIDL ではないので無視してかまいません。古いバージョンの Gecko には WebIDL が散在しており、 WebIDL の代わりに Mozilla の IDL を使ってウェブインターフェイスを記述しているものもありますが、最近の Gecko のコードでは問題ありません。
  - Chromium では、ソースコードの [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/) ディレクトリーのサブツリーである [`core/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/) と [`modules/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/modules/) の 2 ヶ所に配置されます。 Chromium のソースコードには、他の場所にも IDL ファイルがありますが、これらはテストシステムの一部であり、API の実装には関係ありません。
  - WebCore の場合は、ソースコードのあちこちに散らばっているので、もう少し掘り下げる必要があります。例：<https://github.com/WebKit/webkit/blob/master/Source/WebCore/html/DOMTokenList.idl>

## WebIDL のさまざまな方言

WebIDL は[その仕様書](https://heycam.github.io/webidl/)で定義されています。しかし、より多くの情報を伝えるために拡張できるように設計されており、 ブラウザーのベンダーはそれを行っています。

- Gecko については、 Mozilla がその方言である WebIDL の[ドキュメント](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) を作成しました。
- Chromium については、 Google もその拡張機能を説明する[ドキュメント](https://www.chromium.org/blink/webidl/)を作成しました。
- WebCore については、Apple もその方言に関する[ページ](https://trac.webkit.org/wiki/WebKitIDL)を公開しています。

> **メモ:** ここでは、記事を書くときに最も役に立つ WebIDL のサブセットのみを説明します。実装者にとって便利なアノテーションは他にもたくさんあります。完全な概要を知るには、上記のリンク先の 4 つの記事を参照してください。

## インターフェイス

ここでは、 API 全体の機能を記述する WebIDL 構文について説明します。

### インターフェイスの名前

インターフェイス名は、キーワード `interface` の後、次の開き括弧 (`'{'`) またはコロン (`':'`) の前に表示される文字列です。

```js
interface URL {};
```

WebIDL インターフェイスは、真のインターフェイスであれ、ミックスインであれ、それぞれ独自のページをドキュメントに持ち、そのインターフェイスで定義されているすべてのコンストラクター、プロパティ、メソッドを掲載します。

### インターフェイスチェーン

あるインターフェイスの親がある場合は、インターフェイス名の後にコロン (`':'`) をつけて定義します。 1 つのインターフェイスにつき、親は 1 つだけ存在することができます。

```js
interface HTMLMediaElement : HTMLElement {…}
```

継承チェーンはサイドバーに自動的に掲載されます（\\{{APIRef}} マクロを使用）。また、 SVG 画像としてマクロの \\{{InheritanceDiagram}} を使って追加することもできます。

### ミックスイン

いくつかのプロパティやメソッドは、複数のインターフェイスで利用できます。再定義を防ぐために、それらは*ミックスイン*と呼ばれる特別な WebIDL インターフェイスで定義されています。

2019 年 9 月に、ミックスインの構文が更新されています。新しい構文では、 `interface mixin` を使用して、ミックスインのインターフェイスを以下のように定義します。

```js
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

そして、 `includes` キーワードを使用して、ミックスインの内部で定義されたプロパティがインターフェイス上で利用可能であることを表明します。

```js
MyInterface includes MyMixin;
```

ミックスインは継承をせず、他のミックスインを取り込むことはできません。しかし、パーシャルをサポートしているので、次のようにすることができます。

```js
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

MDN では、ドキュメント作成にあたって、ミックスインを非表示にしています。これらは抽象的で仕様のみの構成要素です。
ブラウザーのコンソールで見ることはできませんし、メソッドやプロパティが実際のどのインターフェイスで実装されているかを知る方がより有用です。

IDL で [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils) のようなミックスインに遭遇した場合。
そのミックスインを実装しているインターフェイスを探してください。
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement) のように、ミックスインを実装するインターフェイスを探し、それらのインターフェイス上で直接ミックスインのメンバーを文書化します。

実際には、 `HTMLHyperlinkElementUtils` を文書化するのではなく、 [`HTMLAnchorElement`](/ja/docs/Web/API/HTMLAnchorElement) や [`HTMLAreaElement`](/ja/docs/Web/API/HTMLAreaElement) のような具体的なインターフェイスにドキュメントが追加されます。

`HTMLHyperlinkElementUtils.hash` を適切に説明する以下の 2 ページを参照してください。

- [`HTMLAnchorElement.hash`](/ja/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/ja/docs/Web/API/HTMLAreaElement/hash)

互換性データについては、 [BCD におけるミックスインのデータガイドライン](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md)を参照してください。

### 古いミックスインの構文

古いスタイルの WebIDL ミックスインの構文では、まだいくつかの場所で見かけるかもしれませんが、ミックスインは `[NoInterfaceObject]` という注釈で接頭辞を付けます。

```js
[NoInterfaceObject]
   interface MyMixin {…}
```

旧来の構文では、インターフェイスに実装されたミックスインは `implements` キーワードで定義します。

```js
MyInterface implements MyMixin;
```

### ウィンドウとワーカーでの可用性

ウェブワーカー（任意の型）および Window スコープでの可用性は、注釈 `[Exposed=(Window,Worker)]` を使用して定義します。この注釈は一緒に掲載されている部分インターフェイスに適用されます。

```js
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

この場合、 `Performance.now()` は `Window` スコープと任意のワーカーで利用できますが、 `Performance.timing`、`Performance.navigation`、`Performance.toJSON()` はウェブワーカーで利用できません。

`[Exposed]` の最も一般的な値は次のとおりです。

- `Window`
  - : この部分インターフェイスは {{domxref('Window')}} グローバルスコープで利用可能です。
- `Worker`
  - : この部分インターフェイスは、グローバルスコープが {{domxref('WorkerGlobalScope')}} - {{domxref('DedicatedWorkerGlobalScope')}}、{{domxref('SharedWorkerGlobalScope')}}、{{domxref('ServiceWorkerGlobalScope')}} の子孫であれば、どんな種類のワーカーでも利用可能です（`ChromeWorker` にもありますが、ウェブ上では見えず、 Firefox の内部であるため文書化されていません.）。
- `DedicatedWorker`
  - : この部分インターフェイスは {{domxref('DedicatedWorkerGlobalScope')}} のみで利用可能です。
- `SharedWorker`
  - : この部分インターフェイスは {{domxref('SharedWorkerGlobalScope')}} のみで利用可能です。
- `ServiceWorker`
  - : この部分インターフェイスは {{domxref('ServiceWorkerGlobalScope')}} のみで利用可能です。

`System` のような別の値も可能ですが、これには[特別な意味](/ja/docs/Mozilla/WebIDL_bindings#exposed)があり、文書化する必要はありません。

これらの可能な値は、それ自体が WebIDL ファイルで定義されていることに注意してください。インターフェイスは `[Global=xyz]` という注釈を持つことができます。これは、このタイプのオブジェクトがグローバルスコープとして使用される場合、 `[Exposed]` の値が `xyz` である インターフェイス、プロパティ、メソッドがすべて利用可能になることを意味します。

```js
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

ここでは、グローバルスコープが `DedicatedWorkerGlobalScope` 型の場合、つまり、専用ワーカーにいる場合は、 `Worker` または `DedicatedWorker` に `[Exposed]` 注釈を用いて公開したインターフェイス、プロパティ、メソッドを利用できると定義しています。

### 設定

> **メモ:** この情報は Gecko 固有のものであり、ブラウザー互換性 の節でのみ使用されるべきものです。

Gecko では、コンストラクター、プロパティ、メソッドを含む部分インターフェイスの可用性は、プリファレンス（通常 "pref" と呼ばれます）によって制御されることがあります。これは WebIDL でもマークされています。

```js
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

ここでは `media.webspeech.synth.enabled` が `SpeechSynthesis` インターフェイスとそのプロパティを制御します（完全なリストは 3 つだけではありません）。

> **注意:** 環境設定の既定値は、 WebIDL で直接利用できません（Gecko を使用している製品ごとに異なる場合があります）。

### システムコードでのみ使用可能なもの

インターフェイスによっては、ブラウザー内部システムコード、またはクロームコードでのみ利用可能な機能がある場合があります。これを示すために、 Gecko では \[ChromeOnly] を使用します。例えば、次の例の propName プロパティは、クロームコード経由でのみ呼び出せます。

```js
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## プロパティ

プロパティの定義は、 `attribute` キーワードの存在によって認識することができます。

### プロパティの名前

```js
readonly attribute MediaError? error;
```

上記の例では、プロパティの名前は `error` です。ドキュメントでは、このプロパティは `HTMLMediaElement` インターフェイスに属するため、 `HTMLMediaElement.error` と表記します。ページへのリンクは、インターフェイスの接頭辞を付けるために \\{{domxref('HTMLMediaElement.error')}} を使用したり、コンテキストが明白で曖昧でない場合には、接頭辞を付け**ない**ように \\{{domxref('HTMLMediaElement.error', 'error')}} を使用したりします。

### プロパティの型

```js
readonly attribute MediaError? error;
```

このプロパティの値は `MediaError` 型のオブジェクトです。疑問符 (`'?'`) は `null` の値を取ることができることを示し、ドキュメントでは*いつ*これが発生するかを説明する必要があります。疑問符がない場合、 `error` プロパティを `null` にすることはできません。

### プロパティへの書き込み権限

```js
readonly attribute MediaError? error;
```

キーワード `readonly` が存在する場合、そのプロパティを変更することはできません。読み取り専用としてマークする必要があります。

- インターフェイスでは、その定義用語の横に \{{ReadOnlyInline}} マクロを追加してください。
- そのページの最初の文章で、説明を次のように始めてください。 _**HTMLMediaElement.error`** プロパティは読み取り専用で..._。
- 自身のページに `Read-only` タグを追加してください。
- インターフェイスページの説明を _...を返します_ で始めてください。

> **メモ:** 値を「返す」と表現できるのは、読み取り専用のプロパティのみです。読み取り専用でないプロパティは、値を設定するために使用することもできます。

### 例外の発生

```js
[SetterThrows]
            attribute DOMString src;
```

ある値が不正である場合など、新しい値を設定すると例外が発生することがあります。これは `[SetterThrows]` の注釈でマークします。このような場合、プロパティページの構文の節に、例外の項がなければなりません。例外のリストとそれが発生する条件は、その API の仕様にテキスト情報として記載されています。

例外の中には、明示的にマークされていないものの、JavaScript のバインディングによって定義されているものがあることに注意してください。（JavaScript の文字列にマッピングされている）[不正な列挙値を設定しようとした場合](https://heycam.github.io/webidl/#es-enumeration)は {{jsxref('TypeError')}} 例外が発生します。これは文書化しなければなりませんが、WebIDL 文書では暗黙のうちにマークされているだけです。

ゲッターが例外を発生させるのは珍しいことですが、発生する場合がいくつかあります。この場合、 `[GetterThrows]` 注釈が使用されます。ここでも、プロパティページの構文の節に、例外の項がなければなりません。

```js
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### 例外を発生させない

Webidl の意味論に従わない場合、`[SetterThrows]` や `[GetterThrows]` が設定されていなくても、例外が発生することがよくあります。例えば、厳格モードにおいて、読み取り専用のプロパティを新しい値に設定しようとすると、つまり、その暗黙のセッターを呼び出そうとすると、読み取り専用のプロパティは厳格モードで例外を発生します。

大抵は互換性のためですが、この動作は時に煩わしいものです。これを防ぐために、無操作なセッターを作る（つまり、プロパティを新しい値に設定しようとする試みを黙って無視する）ために、 `[LenientSetter]` 注釈を使用することができます。

```js
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

このような場合、プロパティの説明文に追加の文章が追加されます。例えば、

_このプロパティは読み取り専用ですが、変更されても（厳格なモードでも）例外が発生しません。セッターは無操作なので、無視されます_。

### 新しいオブジェクトまたは参照

プロパティの返値は、内部オブジェクトのコピー、新しく生成された合成オブジェクト、または内部オブジェクトへの参照のいずれかになります。

{{jsxref("String")}}（IDL `DOMString` など）、{{jsxref("Number")}}（IDL `byte`, `octet`, `unsigned int` など）、 {{jsxref("Boolean")}} といった型の基本オブジェクトは常にコピーされるので特に注意すべき点はありません（これは JavaScript 開発者が求める当然の挙動です）。

インターフェイスオブジェクトの場合、既定では、内部オブジェクトへの参照を返すことになっています。このことは、インターフェイスページの短い説明と、特定のサブページの説明の両方で言及しなければなりません。

> **メモ:** オブジェクトを返すプロパティで使われるキーワード `readonly` は、参照に適用されるものです（内部のオブジェクトは変更できません）。返されたオブジェクトのプロパティは、関連するインターフェイスで読み取り専用とされていても、変更することができます。

API は時として、*新しい*オブジェクト、あるいは内部のオブジェクトの*コピー*を返さなければなりません。このような場合、 WebIDL では `[NewObject]` 注釈を使用します。

```js
[NewObject]
   readonly attribute TimeRanges buffered;
```

この場合、 `buffered` を呼び出すたびに異なるオブジェクトが返されます。これを変更しても内部の値は変化せず、内部の値が変化しても各オブジェクトのインスタンスには影響がありません。ドキュメントでは、オブジェクトの隣に*新しい*という形容詞を使ってマークすることにします。

_**`HTMLMediaElement.buffered`** プロパティは読み取り専用で、新しい \\{{domxref("TimeRanges")}} オブジェクトを返します…_

および

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{readonlyinline}}_
  - : _新しい \\{{domxref("TimeRanges")}} オブジェクトを返します …_

コレクションオブジェクトへの参照（`HTMLCollection`, `HTMLFormElementsCollection`, `HTMLOptionsCollection` など、常に `[NewObject]` を含まない）の場合、そのオブジェクトへの変更が、返された参照を通して利用できることを明確にします。このことを示すために、インターフェイスの説明とサブページの両方で、コレクションを**生きた** `HTMLCollection` （または `HTMLFormElementsCollections` や `HTMLOptionsCollection`）として修飾しています。

例えば、

- \\{{domxref("HTMLFormElement.elements")}}\\{{readonlyinline}}
  - : 生きた \\{{domxref("HTMLFormControlsCollection")}} を返します…

### ワーカーでの使用可否

ワーカーにおける個々のプロパティの使用可否は WebIDL にも記載されています。プロパティの場合、既定の使用条件は `interface` （特別なマークがない場合に限り {{domxref('Window')}} コンテキストで使用可能）または `partial interface` で定義されているものと同じです。

文書化する場合、サブページには "構文" の直前に、ウェブワーカーで利用可能かどうかを示す文を記述する必要があります。

### 環境設定

> **メモ:** この情報は Gecko 固有のものであり、ブラウザー互換性の節でのみ使用すべきものです。

Gecko では、いくつかのプロパティの使用可否は、環境設定によって制御されている場合があります。これは WebIDL でもマークされています。

```js
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

ここで `media.webvtt.enabled` は `textTracks` プロパティを制御します。

> **メモ:** 環境設定の既定値は、 WebIDL では直接利用できません（Gecko を使用する製品ごとに異なる場合があります）。

## メソッド

メソッド名の後に括弧があることで、そのメソッドの定義を認識することができます。

### メソッド名

```js
DOMString canPlayType(DOMString type);
```

このメソッドの名前は `canPlayType` で、`HTMLMediaElement` インターフェイスに属しているため、ドキュメントでは `HTMLMediaElement.canPlayType()` （メソッドであることを示す括弧を付けて） と呼ぶことにしています。ページへのリンクは、コンテキストが明白で曖昧でない場合、インターフェイスのプレフィックスを使用する \\{{domxref('HTMLMediaElement.canPlayType()')}} か、接頭辞を使用しない \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} かのどちらかで行われます。括弧は常に付けるようにしてください。

### 引数

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

メソッドの引数は、メソッドサブページの構文の節に記載されています。 WebIDL では、括弧の間にカンマで区切られたリストとして順番に記載されています。それぞれの引数には名前（上記参照）と型（例：`'？'`は `null`値が有効であることを意味します）があります。マークされている場合、引数をメソッド呼び出しに含めることは任意であり、構文の節に記載する際に \\{{OptionalInline}} フラグを指定する必要があります。引数の既定値は、等号 (`'='`) の後に表示されます。

### 返値の型

```js
DOMString canPlayType(DOMString type);
```

返値の型は括弧の中で最初に示します。上記の場合、値は `DOMString` 型のオブジェクトです。疑問符 (`'?'`) が続く場合、 `null` という値も返すことができ、ドキュメントではこれがどのような場合に起こり得るかを説明しなければなりません。このように疑問符がない場合、その返値は `null` になることはありません。

キーワード `void` は、返値が存在しないことを意味します。これは返値の型ではありません。WebIDL のエントリが `void` と書かれている場合、ドキュメントの返値の節にはシンプルに「なし」だけが書かれているはずです。

### 例外の発生

```js
[Throws]
   void fastSeek(double time);
```

いくつかのメソッドは例外を投げることができます。これは `[Throws]` という注釈でマークされます。このような場合、メソッドページの構文の節に例外の項がなければなりません。例外のリストと例外を発生させる条件は、その API の仕様にテキスト情報として記載されています。

例外の中には、明示的にマークされていないものの、 JavaScript のバインディングによって定義されているものもあることに注意してください。[不正な列挙値を設定しようとした場合](https://heycam.github.io/webidl/#es-enumeration) (JavaScript の文字列にマッピングされます）は文書化する必要がありますが、WebIDL 文書では暗黙のうちにマークされているだけです。

これらの[例外の節](/ja/docs/Web/API/SubtleCrypto/importKey#例外)のいずれかを見てみてください。

### ワーカーでの使用可否

ワーカーにおける個々のメソッドの可用性は、WebIDL にも記載されています。メソッドの場合、既定では `interface` （特別なマークがない場合に限り {{domxref('Window')}} コンテキストで利用可能）または `partial interface` として定義されているものと同じです。

ドキュメントでは、サブページの構文の節の直前に、ウェブワーカーで利用可能かどうかを示す文を記述する必要があります。

### 環境設定

> **メモ:** この情報は Gecko 固有のものであり、ブラウザーの互換性の節でのみ使用するようにしてください。

Gecko では、いくつかのプロパティの利用可否は環境設定によって制御される場合があります。これは WebIDL でもマークされています。

```js
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

ここでは `media.webvtt.enabled` が `addTextTrack()` メソッドを制御しています。

> **メモ:** 環境設定の既定値は、WebIDL では直接利用できません（Gecko を使用する製品ごとに異なる場合があります）。

## 特殊なメソッド

いくつかのメソッドは、WebIDL の通常のメソッドとしてではなく、特別なキーワードとして記載されており、特定の標準的な JavaScript のメソッドに変換されます。

### toString() および toJSON()

文字列化子とは、あるインターフェイスに基づくオブジェクトが、文字列を期待するコンテキストでどのように解決されるかを指定するものです。（[文字列化子](#文字列化子)の節を参照してください。）さらに、このキーワードは `toString()` に対応付けられ、次のように定義されます。

```js
stringifier;
```

`toString()` メソッドは、インターフェイスの他のメソッドと同様に掲載され、独自のサブページがあります（例: {{domxref("Range.toString()")}}）。

JSON 化子は `toJSON()` に対応付けられ、次のように定義されます。

```js
jsonifier; // Gecko 版
serializer; // 標準版
```

`toJSON()` メソッドは他のインターフェイスのメソッドと同様に掲載され、独自のサブページがあります（例: {{domxref("Performance.toJSON()") }}）。

> **メモ:** WebIDL 仕様では、`jsonifier` の代わりに `serializer` を使用しています。これは Gecko では使われていません。非標準的な、おそらく初期の提案である `jsonifier` だけが mozilla-central で見つかりました。

### イテレーター風のメソッド

インターフェイスは _iterable_ として定義することができます。これは、 `entries()`, `keys()`, `values()`, `forEach()` といったメソッドを持つことを意味します。また、このインターフェイスを実装したオブジェクトに対して {{jsxref("Statements/for...of", "for...of")}} を使用することに対応しています。

反復処理には、*値イテレーター*と*組イテレーター*の 2 種類があります。

#### 値イテレーター

```js
iterable<valueType>
```

このイテレーターは _valueType_ 型の値に対して反復処理を行います。生成されるメソッドは次のようになります。

- `entries()` は添字（すなわち `unsigned long`）の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。
- `values()` は値の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。
- `keys()` はキー、すなわち添字（`unsigned long`）の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。値イテレーターの場合、 `keys()` と `entries()` は等価です。
- `forEach()` はキーで、リストの各項目に対応するコールバック関数を呼び出す[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。

このようなイテレーターは，`for (var p in object)` という構文を `for (var p in object.entries())` の省略形として使うことを可能にします。インターフェイスの説明の中に、このことに関する文を追加しています。

> **メモ:** 以下の場合、反復処理する値の組は 2 つの異なる方法で定義することができます。
>
> 1. webidl ファイルの外側で、それに付随する散文で。このような散文は仕様書にあり、通常、次のように始まります。_"[反復処理する値](https://heycam.github.io/webidl/#dfn-values-to-iterate-over)..."_.
> 2. webidl ファイルでは、インターフェイスがインデックス付きプロパティに対応している場合、つまり、インターフェイスが `unsigned long` 型の引数を持つ `getter` メソッドを持つ場合、暗黙のうちに、インデックス付きプロパティに対応するようにします。

#### 組イテレーター

```js
iterable<keyType, valueType>
```

このイテレーターは、_valueType_ 型の値と _keyType_ 型のキーを反復処理します。生成されるメソッドは次のようになります。

- `entries()` は（_keyType_ 型の）索引の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。例: E{{domxref('FormData.entries()')}}
- `values()` は値の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。例: {{domxref('FormData.values()')}}
- `keys()` はキーの[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。例: {{domxref('FormData.keys()')}}
- Once [Firefox バグ 1216751](https://bugzil.la/1216751) lands, `forEach()`.

このようなイテレータを使うと，`for (var p in object)` という構文を， `for (var p in object.entries())` の省略形として使うことができます．インターフェイスの説明の中に、それに関する文を追加します。例: {{domxref('FormData')}}.

> **メモ:** 繰り返す値の組は、 webidl ファイルではなく、それに付随する散文で定義されます。そのような散文は仕様書にあり、通常、次のように始まります。_"The [value pairs to iterate over](https://heycam.github.io/webidl/#dfn-value-pairs-to-iterate-over)..."_ で始まります。
>
> 例えば、{{domxref('FormData')}}の場合、仕様書の中に次のように書かれています。_"The [value pairs to iterate over](https://heycam.github.io/webidl/#dfn-value-pairs-to-iterate-over) are the [entries](https://xhr.spec.whatwg.org/#concept-formdata-entry) with the key is the [name](https://xhr.spec.whatwg.org/#concept-formdata-entry-name) and the value the [value](https://xhr.spec.whatwg.org/#concept-formdata-entry-value). "_

### 集合風メソッド

このインターフェイスは _set-like_ として定義することができます。つまり、順序付きの値の集合を表すもので、 `entries()`, `keys()`, `values()`, `forEach(),` と `has()` (`size` 属性も持ちます) のメソッドを持っています。また、このインターフェイスを実装したオブジェクトに対して {{jsxref("Statements/for...of", "for...of")}} を使用することもサポートしています。 set-like には、接頭辞として `readonly` を付けることも、付けないこともできます。read-only でない場合は、セットを変更するためのメソッド `add()`, `clear()`, `delete()` も実装されています。

```js
setlike<valueType>
```

生成されるプロパティは以下の通りです。

- `entries()` はインデックスの[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。例: {{domxref('NodeList.entries()')}}
- `values()` は値の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。例: {{domxref('NodeList.values()')}}
- `keys()` はキーの[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。例: {{domxref('NodeList.keys()')}}
- `forEach()`

set-like 宣言の前に read-only が付かない場合、以下のメソッドも生成されます。

- `add()` は項目を追加します。例: {{domxref('FontFaceSet')}} の `.add()` メソッド
- `clear()` は集合風構造を空にします。例: {{domxref('FontFaceSet')}} の `.clear()` メソッド
- `delete()` は項目を取り除きます。例: {{domxref('FontFaceSet')}} の `.delete()` メソッド

このような集合インターフェイスでは、`for (var p in object)` という構文を `for (var p in object.entries())` の省略形として使うこともできます。

## 特殊な動作

IDLのメンバーには、適切なページで注意すべき特別な動作を示すものがあります。

### 文字列化子

インターフェイスに `toString()` メソッドを追加することに加えて、 [toString() と toJSON()](#tostring_and_tojson) で説明したように、文字列化子はオブジェクトインスタンスが文字列として使われたときに既定以外の文字列を返すことを示すこともできます。（既定値は通常、オブジェクトの JSON 表現です）。正確な方法は、 IDL で指定された方法によります。どのようにするかにかかわらず、既定以外の動作はインターフェイスページに記述する必要があります。

`stringifier` キーワードが属性名に付随している場合、オブジェクト名を参照することは属性名を参照することと同じ結果になります。次のような IDL を考えてみましょう。

```js
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

このインターフェイスをベースとしたクラスでは、以下のコード行が相当します。この動作は、インターフェイスページだけでなく、プロパティページにも記載する必要があります。

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

`stringifier` キーワードを単独で使用した場合、上記のようにインターフェイスのオブジェクトを使用することができますが、その動作はソースコードで定義されています。

```js
interface InterfaceIdentifier {
  stringifier;
};
```

インターフェイスリファレンスが実際に何をするのかを知るには、インターフェイスの仕様を参照するか、インターフェイスを実験してその出力を判断してください。

## コンストラクター

コンストラクターは WebIDL では少し隠されています。メインインターフェイスの注釈として記載されています。

### 無名コンストラクター

これは、コンストラクターの最も一般的なケースです。与えられたインターフェイス A のコンストラクターは、 `a = new A(parameters);` のように使うことができます。

```js
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

同じインターフェイスを持つコンストラクターは、インターフェイスの `Constructor` 注釈を使用して定義します。括弧と引数のリストがあってもなくても構いません（上の例のように）。名前のないコンストラクターはすべてサブページで文書化します。たとえば、上の例では _Web/API/MessageChannel/MessageChannel_ というスラッグと `MessageChannel()` というタイトルを付けています。

無名コンストラクターのもうひとつの例、引数付きのものです。

```js
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

また、引数のリストが異なる無名のコンストラクターが複数存在することもあります。すべての構文は、ひとつのサブページで説明されています。

```js
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### 名前付きコンストラクター

```js
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

名前付きコンストラクターとは、そのインターフェイスとは異なる名前を持つコンストラクターのことです。例えば、 `new Image(...)` は新しい `HTMLImageElement` オブジェクトを生成します。WebIDL では、インターフェイスに `NamedConstructor` という注釈をつけ、等号の後にコンストラクターの名前 (`'='`) を、括弧の中にはメソッドと同じ書式で引数を記述して定義します。

特定のインターフェイスに複数の名前付きコンストラクターが存在することもありますが、これは非常に稀なケースで、そのような場合は名前ごとに 1 つのサブページが含まれます。

### 新しいコンストラクターの構文

2019 年 9 月より、 WebIDL のコンストラクターの構文が更新されました。コンストラクターの構文には、インターフェイスの拡張属性が含まれなくなりました。

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
     // …
};
```

新しい仕様では、代わりに `constructor` という名前のメソッドに似た構文を使用し、返値の型を明示的に定義しない、次のような書き方をします。

```js
interface MyInterface {
  constructor(DOMString str);
};
```

つまり、コンストラクターに拡張属性を指定できるようになり、すべてのコンストラクターが例外を発生することを前提にしなくなりました。コンストラクターが例外を発生する場合は、 `[Throws]` がそのことを示すのに使われます。

```js
interface MyInterface {
  [Throws] constructor();
};
```

すべての仕様が新しい構文に更新されるとは限りませんので、おそらく両方の構文に遭遇することになるでしょう。そのため、ここでは引き続き両方の型の構文を取り上げます。

### ワーカーでの使用可否

コンストラクターの使用条件は、定義されているインターフェイス（または部分インターフェイス）と同じです。サブページでは、メソッドと同じようにこの情報を提供します。

### 環境設定

コンストラクターは、定義されているインターフェイス、または部分インターフェイスと同じ環境設定によって制御されます。サブページでは、メソッドと同じようにこの情報を提供します。
