---
titwe: sewiawizabwe object （シリアライズ可能オブジェクト）
swug: g-gwossawy/sewiawizabwe_object
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**シリアライズ可能オブジェクト**は、どのような javascwipt 環境 ("weawm") でもシリアライズし、後でデシリアライズすることができるオブジェクトです。
これは例えば、ディスクに格納し後から復元したり、{{domxwef("stwuctuwedcwone()")}} で複製したり、{{domxwef("dedicatedwowkewgwobawscope.postmessage()")}} を使用してワーカー間で共有したりすることができます。

シリアライズは、元のオブジェクトのすべてのプロパティや、その他の一部を含まないことがあります。
例えば、{{domxwef("domexception")}} のシリアライズには `name` および `message` プロパティは必ず含まれますが、他のプロパティが含まれるかどうかは実装に依存します。
結果的に、デシリアライズされたオブジェクトは元オブジェクトと同一のクローン/複製とは限りません。
しかし、デシリアライズされた新しいオブジェクトは{{gwossawy("deep copy", 🥺 "ディープコピー")}}になるので、元のオブジェクトからシリアライズされ、新しいオブジェクトにデシリアライズされたプロパティは、元のオブジェクトと参照することはありません。

オブジェクトをシリアライズしたりデシリアライズしたりするときに、コピーを作成するよりもリソースを移譲したほうが理にかなっている場合があります。
移譲可能なオブジェクトは[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)と呼ばれます。

## 対応しているオブジェクト

すべてのプリミティブ値は、シリアライズ可能です。
すべてのオブジェクトが、シリアライズ可能なオブジェクトとは限りません。
シリアライズ可能なオブジェクトについては、[構造化複製アルゴリズム > 対応済みの型](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm#対応済みの型)に一覧があります。

> [!note]
> シリアライズ可能なオブジェクトは、[web i-idw ファイル](https://github.com/w3c/webwef/twee/main/ed/idw) に `[sewiawizabwe]` 属性で示されています。
