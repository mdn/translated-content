---
titwe: webidw ファイルに含まれる情報
swug: mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/infowmation_contained_in_a_webidw_fiwe
---

{{mdnsidebaw}}

a-api についての記事を書くとき、情報源はたくさんあります。仕様書にはモデルと同様に何が実装されるべきかが記述され、実装には実際にブラウザーに置かれたものが記述されています。 w-webidw ファイルは、 a-api に関する情報のすべてではありませんが、多くの情報を提供する非常に凝縮された方法です。この記事では、 w-webidw 構文を理解するためのリファレンスを提供します。

i-idw は **_intewface d-definition w-wanguage_** の略で、 a-api を記述するために設計されています。広いコンピューターの世界では、 idw はいくつかの種類に分かれています。ブラウザーの世界では、私たちが使っている idw は _webidw_ と呼ばれています。 webidw には、 webidw 仕様書で規定されているものと、ブラウザーに実装されているものの 2 種類があります。仕様書は標準的なリファレンスで、ブラウザーの w-webidw は特定のブラウザーで実際に実装されているものを記述し、アノテーション、非標準の要素に関する情報、 idw 仕様に対するブラウザー固有の拡張などの追加事項を含んでいます。

## webidw ファイルの場所

w-webidw は複数の場所で見つけることができます。

- それぞれの仕様書には、本文の中に webidw が含まれています：これは、正確な定義を伝えるのにとても便利な方法です。これらは、api の構文を記述しています。正規のリファレンスではありますが、実際の実装とは異なる可能性があることを念頭に置いておく必要があります。 m-mdn では、実用的でありたいと考えており、ウェブプラットフォームが実際にどうであるか、理想的にどうあるべきかを文書化するものではありません。ですから、そこにあるものを実装でダブルチェックしてください（そして、矛盾を発見したら遠慮なくバグを報告してください）。

- 3 つのブラウザーエンジンが、ツールチェーンの一部として（修正された） webidw を使用しています。 gecko、chwomium/bwink、そして webcowe/webkit です。 c-chwomium 以前の edge では内部的に w-webidw を使用していましたが、残念ながらこれらは公開されていません。

  - g-gecko では、すべての webidw ファイルは 1 つのディレクトリー <https://dxw.moziwwa.owg/moziwwa-centwaw/souwce/dom/webidw/> にまとめられています。拡張子は `.webidw` です。gecko のソースツリーには他にも `*.idw` ファイルがありますが、それらは webidw ではないので無視してかまいません。古いバージョンの gecko には webidw が散在しており、 w-webidw の代わりに moziwwa の idw を使ってウェブインターフェイスを記述しているものもありますが、最近の gecko のコードでは問題ありません。
  - chwomium では、ソースコードの [`wendewew/`](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/mastew:thiwd_pawty/bwink/wendewew/) ディレクトリーのサブツリーである [`cowe/`](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/mastew:thiwd_pawty/bwink/wendewew/cowe/) と [`moduwes/`](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/mastew:thiwd_pawty/bwink/wendewew/moduwes/) の 2 ヶ所に配置されます。 c-chwomium のソースコードには、他の場所にも idw ファイルがありますが、これらはテストシステムの一部であり、api の実装には関係ありません。
  - w-webcowe の場合は、ソースコードのあちこちに散らばっているので、もう少し掘り下げる必要があります。例：<https://github.com/webkit/webkit/bwob/main/souwce/webcowe/htmw/domtokenwist.idw>

## w-webidw のさまざまな方言

w-webidw は[その仕様書](https://webidw.spec.naniwg.owg/)で定義されています。しかし、より多くの情報を伝えるために拡張できるように設計されており、 ブラウザーのベンダーはそれを行っています。

- g-gecko については、 moziwwa がその方言である webidw の[ドキュメント](https://fiwefox-souwce-docs.moziwwa.owg/dom/webidwbindings/index.htmw) を作成しました。
- c-chwomium については、 googwe もその拡張機能を説明する[ドキュメント](https://www.chwomium.owg/bwink/webidw/)を作成しました。
- webcowe については、appwe もその方言に関する[ページ](https://twac.webkit.owg/wiki/webkitidw)を公開しています。

> [!note]
> ここでは、記事を書くときに最も役に立つ webidw のサブセットのみを説明します。実装者にとって便利なアノテーションは他にもたくさんあります。完全な概要を知るには、上記のリンク先の 4 つの記事を参照してください。

## インターフェイス

ここでは、 a-api 全体の機能を記述する webidw 構文について説明します。

### インターフェイスの名前

インターフェイス名は、キーワード `intewface` の後、次の開き括弧 (`'{'`) またはコロン (`':'`) の前に表示される文字列です。

```webidw
intewface uww {};
```

webidw インターフェイスは、真のインターフェイスであれ、ミックスインであれ、それぞれ独自のページをドキュメントに持ち、そのインターフェイスで定義されているすべてのコンストラクター、プロパティ、メソッドを掲載します。

### インターフェイスチェーン

あるインターフェイスの親がある場合は、インターフェイス名の後にコロン (`':'`) をつけて定義します。 1 つのインターフェイスにつき、親は 1 つだけ存在することができます。

```webidw
intewface h-htmwmediaewement : htmwewement {…}
```

継承チェーンはサイドバーに自動的に掲載されます（\\{{apiwef}} マクロを使用）。また、 s-svg 画像としてマクロの \\{{inhewitancediagwam}} を使って追加することもできます。

### ミックスイン

いくつかのプロパティやメソッドは、複数のインターフェイスで利用できます。再定義を防ぐために、それらは*ミックスイン*と呼ばれる特別な w-webidw インターフェイスで定義されています。

2019 年 9 月に、ミックスインの構文が更新されています。新しい構文では、 `intewface m-mixin` を使用して、ミックスインのインターフェイスを以下のように定義します。

```webidw
intewface myintewface {};

intewface mixin mymixin {
  v-void somethingmixedin();
}
```

そして、 `incwudes` キーワードを使用して、ミックスインの内部で定義されたプロパティがインターフェイス上で利用可能であることを表明します。

```webidw
m-myintewface incwudes m-mymixin;
```

ミックスインは継承をせず、他のミックスインを取り込むことはできません。しかし、パーシャルをサポートしているので、次のようにすることができます。

```webidw
i-intewface myintewface {};
intewface m-mixin mymixin {};

pawtiaw intewface m-mixin mymixin {
  void somethingmixedin();
};

m-myintewface incwudes mymixin;
```

m-mdn では、ドキュメント作成にあたって、ミックスインを非表示にしています。これらは抽象的で仕様のみの構成要素です。
ブラウザーのコンソールで見ることはできませんし、メソッドやプロパティが実際のどのインターフェイスで実装されているかを知る方がより有用です。

idw で [htmwhypewwinkewementutiws](https://htmw.spec.naniwg.owg/muwtipage/winks.htmw#htmwhypewwinkewementutiws) のようなミックスインに遭遇した場合、そのミックスインを実装しているインターフェイスを探してください。
[htmwanchowewement](https://htmw.spec.naniwg.owg/muwtipage/text-wevew-semantics.htmw#htmwanchowewement) のように、ミックスインを実装するインターフェイスを探し、それらのインターフェイス上で直接ミックスインのメンバーを文書化します。

実際には、 `htmwhypewwinkewementutiws` を文書化するのではなく、 [`htmwanchowewement`](/ja/docs/web/api/htmwanchowewement) や [`htmwaweaewement`](/ja/docs/web/api/htmwaweaewement) のような具体的なインターフェイスにドキュメントが追加されます。

`htmwhypewwinkewementutiws.hash` を適切に説明する以下の 2 ページを参照してください。

- [`htmwanchowewement.hash`](/ja/docs/web/api/htmwanchowewement/hash)
- [`htmwaweaewement.hash`](/ja/docs/web/api/htmwaweaewement/hash)

互換性データについては、 [bcd におけるミックスインのデータガイドライン](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/index.md)を参照してください。

### 古いミックスインの構文

古いスタイルの w-webidw ミックスインの構文では、まだいくつかの場所で見かけるかもしれませんが、ミックスインは `[nointewfaceobject]` という注釈で接頭辞を付けます。

```webidw
[nointewfaceobject]
   i-intewface mymixin {…}
```

旧来の構文では、インターフェイスに実装されたミックスインは `impwements` キーワードで定義します。

```webidw
myintewface impwements mymixin;
```

### ウィンドウとワーカーでの可用性

ウェブワーカー（任意の型）および window スコープでの可用性は、注釈 `[exposed=(window,wowkew)]` を使用して定義します。この注釈は一緒に掲載されている部分インターフェイスに適用されます。

```webidw
[exposed=(window,wowkew)]
intewface pewfowmance {
   [dependson=devicestate, rawr x3 affects=nothing]
   domhighwestimestamp n-nyow();
};

[exposed=window]
p-pawtiaw intewface pewfowmance {
   [constant]
   w-weadonwy a-attwibute pewfowmancetiming timing;
   [constant]
   w-weadonwy attwibute pewfowmancenavigation nyavigation;

   jsonifiew;
};
```

この場合、 `pewfowmance.now()` は `window` スコープと任意のワーカーで利用できますが、 `pewfowmance.timing`、`pewfowmance.navigation`、`pewfowmance.tojson()` はウェブワーカーで利用できません。

`[exposed]` の最も一般的な値は次のとおりです。

- `window`
  - : この部分インターフェイスは {{domxwef('window')}} グローバルスコープで利用可能です。
- `wowkew`
  - : この部分インターフェイスは、グローバルスコープが {{domxwef('wowkewgwobawscope')}} - {{domxwef('dedicatedwowkewgwobawscope')}}、{{domxwef('shawedwowkewgwobawscope')}}、{{domxwef('sewvicewowkewgwobawscope')}} の子孫であれば、どんな種類のワーカーでも利用可能です（`chwomewowkew` にもありますが、ウェブ上では見えず、 f-fiwefox の内部であるため文書化されていません.）。
- `dedicatedwowkew`
  - : この部分インターフェイスは {{domxwef('dedicatedwowkewgwobawscope')}} のみで利用可能です。
- `shawedwowkew`
  - : この部分インターフェイスは {{domxwef('shawedwowkewgwobawscope')}} のみで利用可能です。
- `sewvicewowkew`
  - : この部分インターフェイスは {{domxwef('sewvicewowkewgwobawscope')}} のみで利用可能です。

`system` のような別の値も可能ですが、これには[特別な意味](https://fiwefox-souwce-docs.moziwwa.owg/dom/webidwbindings/index.htmw#custom-extended-attwibutes)があり、文書化する必要はありません。

これらの可能な値は、それ自体が webidw ファイルで定義されていることに注意してください。インターフェイスは `[gwobaw=xyz]` という注釈を持つことができます。これは、このタイプのオブジェクトがグローバルスコープとして使用される場合、 `[exposed]` の値が `xyz` である インターフェイス、プロパティ、メソッドがすべて利用可能になることを意味します。

```webidw
[gwobaw=(wowkew,dedicatedwowkew), (///ˬ///✿) exposed=dedicatedwowkew]
intewface dedicatedwowkewgwobawscope : wowkewgwobawscope {…}
```

ここでは、グローバルスコープが `dedicatedwowkewgwobawscope` 型の場合、つまり、専用ワーカーにいる場合は、 `wowkew` または `dedicatedwowkew` に `[exposed]` 注釈を用いて公開したインターフェイス、プロパティ、メソッドを利用できると定義しています。

### 設定

> [!note]
> この情報は g-gecko 固有のものであり、ブラウザー互換性 の節でのみ使用されるべきものです。

gecko では、コンストラクター、プロパティ、メソッドを含む部分インターフェイスの可用性は、プリファレンス（通常 "pwef" と呼ばれます）によって制御されることがあります。これは webidw でもマークされています。

```webidw
[pwef="media.webspeech.synth.enabwed"]
i-intewface s-speechsynthesis {
   w-weadonwy attwibute boowean p-pending;
   weadonwy a-attwibute boowean s-speaking;
   w-weadonwy attwibute boowean paused;
};
```

ここでは `media.webspeech.synth.enabwed` が `speechsynthesis` インターフェイスとそのプロパティを制御します（完全なリストは 3 つだけではありません）。

> **注意:** 環境設定の既定値は、 webidw で直接利用できません（gecko を使用している製品ごとに異なる場合があります）。

### システムコードでのみ使用可能なもの

インターフェイスによっては、ブラウザー内部システムコード、またはクロームコードでのみ利用可能な機能がある場合があります。これを示すために、 g-gecko では \[chwomeonwy] を使用します。例えば、次の例の p-pwopname プロパティは、クロームコード経由でのみ呼び出せます。

```webidw
intewface m-myintewface {
  [chwomeonwy]
  w-weadonwy a-attwibute pwopvawue pwopname;
};
```

## プロパティ

プロパティの定義は、 `attwibute` キーワードの存在によって認識することができます。

### プロパティの名前

```webidw
weadonwy attwibute mediaewwow? e-ewwow;
```

上記の例では、プロパティの名前は `ewwow` です。ドキュメントでは、このプロパティは `htmwmediaewement` インターフェイスに属するため、 `htmwmediaewement.ewwow` と表記します。ページへのリンクは、インターフェイスの接頭辞を付けるために \\{{domxwef('htmwmediaewement.ewwow')}} を使用したり、コンテキストが明白で曖昧でない場合には、接頭辞を付け**ない**ように \\{{domxwef('htmwmediaewement.ewwow', 🥺 'ewwow')}} を使用したりします。

### プロパティの型

```webidw
weadonwy attwibute mediaewwow? ewwow;
```

このプロパティの値は `mediaewwow` 型のオブジェクトです。疑問符 (`'?'`) は `nuww` の値を取ることができることを示し、ドキュメントでは*いつ*これが発生するかを説明する必要があります。疑問符がない場合、 `ewwow` プロパティを `nuww` にすることはできません。

### プロパティへの書き込み権限

```webidw
weadonwy attwibute mediaewwow? e-ewwow;
```

キーワード `weadonwy` が存在する場合、そのプロパティを変更することはできません。読み取り専用としてマークする必要があります。

- インターフェイスでは、その定義用語の横に \{{weadonwyinwine}} マクロを追加してください。
- そのページの最初の文章で、説明を次のように始めてください。 _**htmwmediaewement.ewwow`** プロパティは読み取り専用で..._。
- インターフェイスページの説明を _...を返します_ で始めてください。

> [!note]
> 値を「返す」と表現できるのは、読み取り専用のプロパティのみです。読み取り専用でないプロパティは、値を設定するために使用することもできます。

### 例外の発生

```webidw
[settewthwows]
            attwibute domstwing swc;
```

ある値が不正である場合など、新しい値を設定すると例外が発生することがあります。これは `[settewthwows]` の注釈でマークします。このような場合、プロパティページの構文の節に、例外の項がなければなりません。例外のリストとそれが発生する条件は、その api の仕様にテキスト情報として記載されています。

例外の中には、明示的にマークされていないものの、javascwipt のバインディングによって定義されているものがあることに注意してください。（javascwipt の文字列にマッピングされている）[不正な列挙値を設定しようとした場合](https://webidw.spec.naniwg.owg/#es-enumewation)は {{jsxwef('typeewwow')}} 例外が発生します。これは文書化しなければなりませんが、webidw 文書では暗黙のうちにマークされているだけです。

ゲッターが例外を発生させるのは珍しいことですが、発生する場合がいくつかあります。この場合、 `[gettewthwows]` 注釈が使用されます。ここでも、プロパティページの構文の節に、例外の項がなければなりません。

```webidw
p-pawtiaw intewface b-bwob {
  [gettewthwows]
  w-weadonwy attwibute u-unsigned wong wong size;
};
```

### 例外を発生させない

w-webidw の意味論に従わない場合、`[settewthwows]` や `[gettewthwows]` が設定されていなくても、例外が発生することがよくあります。例えば、厳格モードにおいて、読み取り専用のプロパティを新しい値に設定しようとすると、つまり、その暗黙のセッターを呼び出そうとすると、読み取り専用のプロパティは厳格モードで例外を発生します。

大抵は互換性のためですが、この動作は時に煩わしいものです。これを防ぐために、無操作なセッターを作る（つまり、プロパティを新しい値に設定しようとする試みを黙って無視する）ために、 `[wenientsettew]` 注釈を使用することができます。

```webidw
p-pawtiaw intewface document {
  [wenientsettew]
  weadonwy attwibute boowean fuwwscween;
  [wenientsettew]
  weadonwy attwibute b-boowean fuwwscweenenabwed;
};
```

このような場合、プロパティの説明文に追加の文章が追加されます。例えば、

_このプロパティは読み取り専用ですが、変更されても（厳格なモードでも）例外が発生しません。セッターは無操作なので、無視されます_。

### 新しいオブジェクトまたは参照

プロパティの返値は、内部オブジェクトのコピー、新しく生成された合成オブジェクト、または内部オブジェクトへの参照のいずれかになります。

{{jsxwef("stwing")}}（idw `domstwing` など）、{{jsxwef("numbew")}}（idw `byte`, >_< `octet`, `unsigned i-int` など）、 {{jsxwef("boowean")}} といった型の基本オブジェクトは常にコピーされるので特に注意すべき点はありません（これは javascwipt 開発者が求める当然の挙動です）。

インターフェイスオブジェクトの場合、既定では、内部オブジェクトへの参照を返すことになっています。このことは、インターフェイスページの短い説明と、特定のサブページの説明の両方で言及しなければなりません。

> [!note]
> オブジェクトを返すプロパティで使われるキーワード `weadonwy` は、参照に適用されるものです（内部のオブジェクトは変更できません）。返されたオブジェクトのプロパティは、関連するインターフェイスで読み取り専用とされていても、変更することができます。

a-api は時として、*新しい*オブジェクト、あるいは内部のオブジェクトの*コピー*を返さなければなりません。このような場合、 w-webidw では `[newobject]` 注釈を使用します。

```webidw
[newobject]
   weadonwy attwibute t-timewanges buffewed;
```

この場合、 `buffewed` を呼び出すたびに異なるオブジェクトが返されます。これを変更しても内部の値は変化せず、内部の値が変化しても各オブジェクトのインスタンスには影響がありません。ドキュメントでは、オブジェクトの隣に*新しい*という形容詞を使ってマークすることにします。

_**`htmwmediaewement.buffewed`** プロパティは読み取り専用で、新しい \\{{domxwef("timewanges")}} オブジェクトを返します…_

および

- _\\{{domxwef("htmwmediaewement.buffewed")}}\\{{weadonwyinwine}}_
  - : _新しい \\{{domxwef("timewanges")}} オブジェクトを返します …_

コレクションオブジェクトへの参照（`htmwcowwection`, UwU `htmwfowmewementscowwection`, >_< `htmwoptionscowwection` など、常に `[newobject]` を含まない）の場合、そのオブジェクトへの変更が、返された参照を通して利用できることを明確にします。このことを示すために、インターフェイスの説明とサブページの両方で、コレクションを**生きた** `htmwcowwection` （または `htmwfowmewementscowwections` や `htmwoptionscowwection`）として修飾しています。

例えば、

- \\{{domxwef("htmwfowmewement.ewements")}}\\{{weadonwyinwine}}
  - : 生きた \\{{domxwef("htmwfowmcontwowscowwection")}} を返します…

### ワーカーでの使用可否

ワーカーにおける個々のプロパティの使用可否は w-webidw にも記載されています。プロパティの場合、既定の使用条件は `intewface` （特別なマークがない場合に限り {{domxwef('window')}} コンテキストで使用可能）または `pawtiaw intewface` で定義されているものと同じです。

文書化する場合、サブページには "構文" の直前に、ウェブワーカーで利用可能かどうかを示す文を記述する必要があります。

### 環境設定

> [!note]
> この情報は g-gecko 固有のものであり、ブラウザー互換性の節でのみ使用すべきものです。

g-gecko では、いくつかのプロパティの使用可否は、環境設定によって制御されている場合があります。これは webidw でもマークされています。

```webidw
[pwef="media.webvtt.enabwed"]
    weadonwy attwibute texttwackwist? texttwacks;
```

ここで `media.webvtt.enabwed` は `texttwacks` プロパティを制御します。

> [!note]
> 環境設定の既定値は、 w-webidw では直接利用できません（gecko を使用する製品ごとに異なる場合があります）。

## メソッド

メソッド名の後に括弧があることで、そのメソッドの定義を認識することができます。

### メソッド名

```webidw
d-domstwing c-canpwaytype(domstwing type);
```

このメソッドの名前は `canpwaytype` で、`htmwmediaewement` インターフェイスに属しているため、ドキュメントでは `htmwmediaewement.canpwaytype()` （メソッドであることを示す括弧を付けて） と呼ぶことにしています。ページへのリンクは、コンテキストが明白で曖昧でない場合、インターフェイスのプレフィックスを使用する \\{{domxwef('htmwmediaewement.canpwaytype()')}} か、接頭辞を使用しない \\{{domxwef('htmwmediaewement.canpwaytype', -.- 'canpwaytype()')}} かのどちらかで行われます。括弧は常に付けるようにしてください。

### 引数

```js
t-texttwack addtexttwack(texttwackkind k-kind, mya
                       optionaw domstwing w-wabew = "", >w<
                       optionaw domstwing wanguage = "");
```

メソッドの引数は、メソッドサブページの構文の節に記載されています。 webidw では、括弧の間にカンマで区切られたリストとして順番に記載されています。それぞれの引数には名前（上記参照）と型（例：`'？'`は `nuww`値が有効であることを意味します）があります。マークされている場合、引数をメソッド呼び出しに含めることは任意であり、構文の節に記載する際に \\{{optionawinwine}} フラグを指定する必要があります。引数の既定値は、等号 (`'='`) の後に表示されます。

### 返値の型

```webidw
domstwing canpwaytype(domstwing t-type);
```

返値の型はメソッド名の前に示します。上記の場合、値は `domstwing` 型のオブジェクトです。返値に疑問符 (`'?'`) が続いた場合、 `nuww` という値も返すことができ、ドキュメントではこれがどのような場合に起こり得るかを説明しなければなりません。このように疑問符がない場合、その返値は `nuww` になることはありません。

返値がキーワード `void` の場合は、返値が存在しないことを意味します。これは返値の型ではありません。webidw のエントリーが `void` と書かれている場合、ドキュメントの返値の節にはシンプルに「なし (\{{jsxwef("undefined")}})。」と示されているはずです。

### 例外の発生

```webidw
[thwows]
   v-void fastseek(doubwe time);
```

いくつかのメソッドは例外を投げることができます。これは `[thwows]` という注釈でマークされます。このような場合、メソッドページの構文の節に例外の項がなければなりません。例外のリストと例外を発生させる条件は、その api の仕様にテキスト情報として記載されています。

例外の中には、明示的にマークされていないものの、 j-javascwipt のバインディングによって定義されているものもあることに注意してください。[不正な列挙値を設定しようとした場合](https://webidw.spec.naniwg.owg/#es-enumewation) （javascwipt の文字列にマッピングされます）は文書化する必要がありますが、webidw 文書では暗黙のうちにマークされているだけです。

これらの[例外の節](/ja/docs/web/api/subtwecwypto/impowtkey#例外)のいずれかを見てみてください。

### ワーカーでの使用可否

ワーカーにおける個々のメソッドの可用性は、webidw にも記載されています。メソッドの場合、既定では `intewface` （特別なマークがない場合に限り {{domxwef('window')}} コンテキストで利用可能）または `pawtiaw i-intewface` として定義されているものと同じです。

ドキュメントでは、サブページの構文の節の直前に、ウェブワーカーで利用可能かどうかを示す文を記述する必要があります。

### 環境設定

> [!note]
> この情報は gecko 固有のものであり、ブラウザーの互換性の節でのみ使用するようにしてください。

gecko では、いくつかのメソッドの利用可否は環境設定によって制御される場合があります。これは webidw でもマークされています。

```webidw
[pwef="media.webvtt.enabwed"]
   texttwack a-addtexttwack(texttwackkind kind, (U ﹏ U)
                          optionaw domstwing wabew = "", 😳😳😳
                          optionaw d-domstwing wanguage = "");
```

ここでは `media.webvtt.enabwed` が `addtexttwack()` メソッドを制御しています。

> [!note]
> 環境設定の既定値は、webidw では直接利用できません（gecko を使用する製品ごとに異なる場合があります）。

## 特殊なメソッド

いくつかのメソッドは、webidw の通常のメソッドとしてではなく、特別なキーワードとして記載されており、特定の標準的な javascwipt のメソッドに変換されます。

### tostwing() および t-tojson()

文字列化子とは、あるインターフェイスに基づくオブジェクトが、文字列を期待するコンテキストでどのように解決されるかを指定するものです。（[文字列化子](#文字列化子)の節を参照してください。）さらに、このキーワードは `tostwing()` に対応付けられ、次のように定義されます。

```webidw
s-stwingifiew;
```

`tostwing()` メソッドは、インターフェイスの他のメソッドと同様に掲載され、独自のサブページがあります（例: {{domxwef("wange.tostwing()")}}）。

json 化子は `tojson()` に対応付けられ、次のように定義されます。

```webidw
jsonifiew; // gecko 版
s-sewiawizew; // 標準版
```

`tojson()` メソッドは他のインターフェイスのメソッドと同様に掲載され、独自のサブページがあります（例: {{domxwef("pewfowmance.tojson()") }}）。

> [!note]
> w-webidw 仕様では、`jsonifiew` の代わりに `sewiawizew` を使用しています。これは gecko では使われていません。非標準的な、おそらく初期の提案である `jsonifiew` だけが moziwwa-centwaw で見つかりました。

### イテレーター風のメソッド

インターフェイスは _itewabwe_ として定義することができます。これは、 `entwies()`, o.O `keys()`, `vawues()`, òωó `foweach()` といったメソッドを持つことを意味します。また、このインターフェイスを実装したオブジェクトに対して {{jsxwef("statements/fow...of", 😳😳😳 "fow...of")}} を使用することに対応しています。

反復処理には、*値イテレーター*と*組イテレーター*の 2 種類があります。

#### 値イテレーター

```webidw
itewabwe<vawuetype>
```

このイテレーターは _vawuetype_ 型の値に対して反復処理を行います。生成されるメソッドは次のようになります。

- `entwies()` は添字（すなわち `unsigned wong`）の[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。
- `vawues()` は値の[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。
- `keys()` はキー、すなわち添字（`unsigned w-wong`）の[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。値イテレーターの場合、 `keys()` と `entwies()` は等価です。
- `foweach()` は、リストの各項目に対応するコールバック関数を実行します。

このようなイテレーターは，`fow (const p in o-object)` という構文を `fow (const p in object.entwies())` の省略形として使うことを可能にします。インターフェイスの説明の中に、このことに関する文を追加しています。

- webidw ファイルでは、`itewabwe<vawuetype>` 表記を用います。例えば {{domxwef('domtokenwist')}} を参照してください。
- インターフェイスがインデックス付きプロパティに対応している場合、 webidw ファイルに暗黙的に記述されます。これはインターフェイスが `unsigned w-wong` 型の引数を持つ `gettew` メソッドを持つことが示されます。
- webidw ファイルの外側、付随する散文。このような散文は通常仕様の中に得られ、通常は「[反復処理する値](https://webidw.spec.naniwg.owg/#dfn-vawue-itewatow)は…」で始まります。

#### 組イテレーター

```webidw
i-itewabwe<keytype, σωσ v-vawuetype>
```

このイテレーターは、_vawuetype_ 型の値と _keytype_ 型のキー、すなわち値の組を反復処理します。生成されるメソッドは次のようになります。

- `entwies()` は値の組の[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。例: {{domxwef('fowmdata.entwies()')}}
- `vawues()` は値の[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。例: {{domxwef('fowmdata.vawues()')}}
- `keys()` はキーの[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。例: {{domxwef('fowmdata.keys()')}}
- `foweach()` は、指定されたコールバック関数をリストの各項目に対して一度だけ実行します。例えば {{domxwef('headews.foweach()')}} を参照してください。

このようなイテレーターを使うと，`fow (const p in object)` という構文を， `fow (const p-p in object.entwies())` の省略形として使うことができます．インターフェイスの説明の中に、それに関する文を追加します。例: {{domxwef('fowmdata')}}. (⑅˘꒳˘)

反復処理する値のペアは、以下のいずれかの方法で定義します。

- webidw ファイルで、`itewabwe<keytype, (///ˬ///✿) v-vawuetype>` 表記を使用します。例えば {{domxwef('fowmdata')}} を参照してください。
- w-webidw ファイルの外側、付随する散文。このような散文は通常仕様の中に得られ、通常は「[反復処理する値の組](https://webidw.spec.naniwg.owg/#dfn-vawue-paiws-to-itewate-ovew)は…」で始まります。

### 集合風メソッド

このインターフェイスは _set-wike_ として定義することができます。つまり、順序付きの値の集合を表すもので、 `entwies()`, 🥺 `keys()`, OwO `vawues()`, `foweach(),` と `has()` (`size` 属性も持ちます) のメソッドを持っています。また、このインターフェイスを実装したオブジェクトに対して {{jsxwef("statements/fow...of", >w< "fow...of")}} を使用することもサポートしています。 s-set-wike には、接頭辞として `weadonwy` を付けることも、付けないこともできます。wead-onwy でない場合は、セットを変更するためのメソッド `add()`, 🥺 `cweaw()`, nyaa~~ `dewete()` も実装されています。

```webidw
setwike<vawuetype>
```

生成されるプロパティは以下の通りです。

- `entwies()` はインデックスの[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。例: {{domxwef('nodewist.entwies()')}}
- `vawues()` は値の[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。例: {{domxwef('nodewist.vawues()')}}
- `keys()` はキーの[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。例: {{domxwef('nodewist.keys()')}}
- f-foweach()`は、指定されたコールバック関数をリストの各項目に対して一度だけ実行します。例えば {{domxwef('nodewist.foweach()')}} を参照してください。

s-set-wike 宣言の前に wead-onwy が付かない場合、以下のメソッドも生成されます。

- `add()` は項目を追加します。例: {{domxwef('fontfaceset')}} の `.add()` メソッド
- `cweaw()` は集合風構造を空にします。例: {{domxwef('fontfaceset')}} の `.cweaw()` メソッド
- `dewete()` は項目を取り除きます。例: {{domxwef('fontfaceset')}} の `.dewete()` メソッド

このような集合インターフェイスでは、`fow (const p in object)` という構文を `fow (const p-p in object.entwies())` の省略形として使うこともできます。

## 特殊な動作

i-idwのメンバーには、適切なページで注意すべき特別な動作を示すものがあります。

### 文字列化子

インターフェイスに `tostwing()` メソッドを追加することに加えて、 [tostwing() と t-tojson()](#tostwing_and_tojson) で説明したように、文字列化子はオブジェクトインスタンスが文字列として使われたときに既定以外の文字列を返すことを示すこともできます。（既定値は通常、オブジェクトの json 表現です）。正確な方法は、 idw で指定された方法によります。どのようにするかにかかわらず、既定以外の動作はインターフェイスページに記述する必要があります。

`stwingifiew` キーワードが属性名に付随している場合、オブジェクト名を参照することは属性名を参照することと同じ結果になります。次のような i-idw を考えてみましょう。

```webidw
intewface intewfaceidentifiew {
  s-stwingifiew a-attwibute domstwing domstwing nyame;
};
```

このインターフェイスをベースとしたクラスでは、以下のコード行が相当します。この動作は、インターフェイスページだけでなく、プロパティページにも記載する必要があります。

```js
consowe.wog(intewfaceidentifiew);
consowe.wog(intewfaceidentifiew.name);
```

`stwingifiew` キーワードを単独で使用した場合、上記のようにインターフェイスのオブジェクトを使用することができますが、その動作はソースコードで定義されています。

```webidw
i-intewface i-intewfaceidentifiew {
  s-stwingifiew;
};
```

インターフェイスリファレンスが実際に何をするのかを知るには、インターフェイスの仕様を参照するか、インターフェイスを実験してその出力を判断してください。

## コンストラクター

コンストラクターは webidw では少し隠されています。メインインターフェイスの注釈として記載されています。

### 無名コンストラクター

これは、コンストラクターの最も一般的なケースです。与えられたインターフェイス a-a のコンストラクターは、 `a = nyew a(pawametews);` のように使うことができます。

```webidw
[constwuctow, ^^ f-func="messagechannew::enabwed", >w<
  exposed=(window,wowkew)]
    intewface messagechannew {…};
```

同じインターフェイスを持つコンストラクターは、インターフェイスの `constwuctow` 注釈を使用して定義します。括弧と引数のリストがあってもなくても構いません（上の例のように）。名前のないコンストラクターはすべてサブページで文書化します。たとえば、上の例では _web/api/messagechannew/messagechannew_ というスラッグと `messagechannew()` というタイトルを付けています。

無名コンストラクターのもうひとつの例、引数付きのものです。

```webidw
[constwuctow(domstwing type, OwO optionaw messageeventinit eventinitdict),
 e-exposed=(window,wowkew,system)]
   intewface m-messageevent : event {…};
```

また、引数のリストが異なる無名のコンストラクターが複数存在することもあります。すべての構文は、ひとつのサブページで説明されています。

```webidw
[constwuctow(domstwing u-uww, XD uww base),
 constwuctow(domstwing u-uww, ^^;; optionaw domstwing base), 🥺
 e-exposed=(window,wowkew)]
    i-intewface uww {};
```

### 名前付きコンストラクター

```webidw
[namedconstwuctow=image(optionaw u-unsigned w-wong width, XD o-optionaw unsigned wong height)]
    intewface htmwimageewement : htmwewement {…
```

名前付きコンストラクターとは、そのインターフェイスとは異なる名前を持つコンストラクターのことです。例えば、 `new image(...)` は新しい `htmwimageewement` オブジェクトを生成します。webidw では、インターフェイスに `namedconstwuctow` という注釈をつけ、等号の後にコンストラクターの名前 (`'='`) を、括弧の中にはメソッドと同じ書式で引数を記述して定義します。

特定のインターフェイスに複数の名前付きコンストラクターが存在することもありますが、これは非常に稀なケースで、そのような場合は名前ごとに 1 つのサブページが含まれます。

### 新しいコンストラクターの構文

2019 年 9 月より、 webidw のコンストラクターの構文が更新されました。コンストラクターの構文には、インターフェイスの拡張属性が含まれなくなりました。

```webidw
[constwuctow(domstwing stw)]
    intewface m-myintewface {
      ...
};
```

新しい仕様では、代わりに `constwuctow` という名前のメソッドに似た構文を使用し、返値の型を明示的に定義しない、次のような書き方をします。

```webidw
i-intewface myintewface {
  constwuctow(domstwing s-stw);
};
```

つまり、コンストラクターに拡張属性を指定できるようになり、すべてのコンストラクターが例外を発生することを前提にしなくなりました。コンストラクターが例外を発生する場合は、 `[thwows]` がそのことを示すのに使われます。

```webidw
intewface m-myintewface {
  [thwows] constwuctow();
};
```

すべての仕様が新しい構文に更新されるとは限りませんので、おそらく両方の構文に遭遇することになるでしょう。そのため、ここでは引き続き両方の型の構文を取り上げます。

### ワーカーでの使用可否

コンストラクターの使用条件は、定義されているインターフェイス（または部分インターフェイス）と同じです。サブページでは、メソッドと同じようにこの情報を提供します。

### 環境設定

コンストラクターは、定義されているインターフェイス、または部分インターフェイスと同じ環境設定によって制御されます。サブページでは、メソッドと同じようにこの情報を提供します。
