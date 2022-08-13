---
title: InstallTrigger オブジェクト
slug: Web/API/InstallTrigger
original_slug: XPInstall_API_Reference/InstallTrigger_Object
---
## InstallTrigger

ソフトウェアのダウンロードとインストールをする引き金となる Web ページ上のスクリプトには、`InstallTrigger` オブジェクトを使用します。

### 概要

とても簡単なインストール方法は、インストールスクリプトに必要な InstallTrigger オブジェクトを使用するだけです。

複雑なインストール方法では、[ Install](/ja/XPInstall_API_Reference/Install_Object) オブジェクトや [File](/ja/XPInstall_API_Reference/File_Object) オブジェクトを使用する必要があります。どちらの場合も Web ページスクリプトを作成してインストール処理の引き金にします。そのページ内の InstallTrigger メソッドが、指定した XPI ファイルをダウンロードし、その XPI ファイルのトップレベルに置かれた install.js スクリプトを起動する "引き金" になります。

InstallTrigger オブジェクト上の最初のメソッドは [install](/ja/XPInstall_API_Reference/InstallTrigger_Object/Methods/install) です。これは、XPI ファイル形式にまとめられた一つまたはそれ以上のソフトウェアパッケージをダウンロードし、インストールします。以下は、Web ページ上からインストールする引き金の基本的な例です:

    xpi={'XPInstall Dialog Display Name':'simple.xpi'};
    InstallTrigger.install(xpi);

また、InstallTrigger オブジェクトをソフトウェアのバージョンチェックに使用したり、Netscape 6 や Mozilla のテーマ、言語パックをインストールしたり、[ install](/ja/XPInstall_API_Reference/InstallTrigger_Object/Methods/install) オブジェクトを使用して複数のパッケージをインストールすることもできます。
