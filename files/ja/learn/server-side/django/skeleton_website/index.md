---
title: "Django チュートリアル Part 2: スケルトンウェブサイトの作成"
slug: Learn/Server-side/Django/skeleton_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

[Django チュートリアル](/ja/docs/Learn/Server-side/Django/Tutorial_local_library_website) の 2 つ目の記事では、基本的なウェブサイトプロジェクトの「スケルトン」をどのように作っていくのかを説明します。サイト固有の設定、URL、モデル、ビュー、テンプレートを作成する方法について説明します。

| 前提条件: | [Django 開発環境の設定](/ja/docs/Learn/Server-side/Django/development_environment)。[Django チュートリアル](/ja/docs/Learn/Server-side/Django/Tutorial_local_library_website)を確認してください。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | Django のツールを使って自分の新しいウェブサイトプロジェクトを開始できるようにする。                                                                                                               |

## 概要

この記事は、"スケルトン"ウェブサイトを作る方法を示します。そこにはサイト固有の設定、パス、モデル、ビューやテンプレートを組み込むことができるます。(これらについては後で述べます)

そのプロセスは単純です:

1. `django-admin` ツールを使ってプロジェクトフォルダ、基本的なテンプレートファイル、プロジェクト管理スクリプト(**manage.py**)を作ります .
2. **manage.py** は１つ以上のアプリケーションを作ります。

   > **メモ:** ウェブサイトは 1 つ以上のセクションから成ります。例えば、メインサイト、ブログ、ウィキ、ダウンロードエリアなど。Django は、これらのコンポーネントを別々のアプリケーションとして作成することを助けてくれます。それらは、必要なら異なるプロジェクトで再利用できます。

3. プロジェクトにアプリケーションを含めるために登録します。
4. url/path マッパーはそれらのアプリケーションを結びつけます。

[Local Library website](/ja/docs/Learn/Server-side/Django/Tutorial_local_library_website) のために、ウェブサイトフォルダとプロジェクトフォルダは*locallibrary* という名前をつけます。また、１つのアプリケーションは*catalog*という名前をつけます。 したがって、最上位のフォルダ構成は以下のようになります。:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

以下のセクションでは、その過程をもっと詳細に述べ、あなたが変更を試す方法を示しましょう。この記事の最後に、我々はいくつかの他のウェブサイトの設定について述べてみます。それはあなたがこのステージで行っていることかもしませんが。

## プロジェクトの作成

始めにコマンドプロンプトまたはターミナルを開いて、（先に自分が仮想環境([virtual environment](/ja/docs/Learn/Server-side/Django/development_environment#Using_a_virtual_environment))にいることを確認して下さい）、Django アプリを格納したい場所へ移動します（ドキュメントフォルダの中など探しやすい場所にしましょう）。そして、新しいウェブサイトのフォルダ（この場合は _locallibrary_）を作りましょう。そして、cd コマンドでそのフォルダへ移動しましょう。

```bash
mkdir locallibrary
cd locallibrary
```

以下のように、`django-admin startproject`コマンドで新しいプロジェクトを作り、そのフォルダの中に移動します。

```bash
django-admin startproject locallibrary
cd locallibrary
```

`django-admin`ツールは以下のようなフォルダ/ファイル構成を作ります。

```bash
locallibrary/
    manage.py
    locallibrary/
        settings.py
        urls.py
        wsgi.py
```

我々の現在の作業ディレクトリーはこのようなものになっているでしょう。

```
../django_projects/locallibrary/
```

*locallibrary*プロジェクトのサブフォルダはこのウェブサイトに入口点となります:

- **\_\_init\_\_.py** は空ファイルであり、このディレクトリーを Python パッケージとして扱うように指示します。
- **settings.py** はすべてのウェブサイトの設定を含んでいます。ここに、我々が作成した全てのアプリケーション、スタティックファイルの場所やデータベースの詳細設定などを登録します。
- **urls.py** はサイトの url と view のマッピングを定義します。これは、すべての url マッピングコードを含むことができる一方で、いくつかのマッピングは特定のアプリケーションへ委任するのがより一般的です。 また後で分かるでしょう。
- **wsgi.py** はあなたの Django アプリケーションが web サーバと通信するのを助けてくれます。あなたはこれを定型として使うことができます。

**manage.py** スクリプトはアプリケーションを作成したり、データベースを操作したり、web サーバを起動したりするのに使われます。

## catalog アプリケーションの作成

次に、以下のコマンドを実行し、localibrary プロジェクトの中にアプリケーションを作りましょう。（このコマンドはプロジェクト内の manage.py と同じフォルダで実行する必要があります）

```bash
python3 manage.py startapp catalog
```

> **メモ:** 上記コマンドは Linux や macOS X 用です。Windows のコマンドは: `py -3 manage.py startapp catalog`
>
> もし Windows を使っているなら、このモジュール（manage.py）を使う際は`python3` を `py -3` に変更して下さい。
>
> もし Python 3.7.0 以降を使用しているなら、`py manage.py startapp catalog`で使用できます。

このツールは新しいフォルダを作成し、アプリケーションの様々なパーツとなるファイルをそのフォルダに追加します（以下の太字で表示）。 ほとんどのファイルは目的に応じて便利な名前が付けられており(例えば ビューは**views.py**に、モジュールは **models.py**に、テストは**tests.py**に、管理サイトの設定は **admin.py**に、アプリケーションの登録は**apps.py**に保存する必要がある)、 さらに、関連するオブジェクトを操作するための最低限の定型的なコードを用意している。

アップデートされた後のプロジェクトディレクトリーはこのようになる:

```bash
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```

加えて今持っているものは:

- "マイグレーション"を格納するためのマイグレーションフォルダーモデルを変更した場合に自動的にデータベースの変更をするためのファイル
- **\_\_init\_\_.py** — Django/Python がこのフォルダを [Python Package](https://docs.python.org/3/tutorial/modules.html#packages) であると認識するためにここに作られた空のファイル。そうすることで、このオブジェクトは他のプロジェクトでも使用できる。

> **メモ:** 上記ファイルリストに何か欠けているものがあることに気づきましたか？ ビューやモデルがある一方で、URL マッピング、テンプレート、静的ファイルの配置場所はありません。それらの作り方も以後説明します。(それらは全てのサイトで必須ではないですが、この例では必要になります。).

## catalog アプリケーションの登録

アプリケーションが作成されたので、ツールを実行するために（例えばデータベースにモデルを追加する）プロジェクトに登録する必要がある。 アプリケーションの登録はプロジェクトの設定で`INSTALLED_APPS` リストに加えることで行えます。

プロジェクトの設定ファイル **locallibrary/locallibrary/settings.py** を開いて、`INSTALLED_APPS` リストの定義を見つけましょう。そして、以下のようにリストの最後に新しい行を追加しましょう。

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'catalog.apps.CatalogConfig',
]
```

追加した新しい行はアプリケーションの構成オブジェクト(`CatalogConfig`) を指定しており、それはアプリケーション作成時に**/locallibrary/catalog/apps.py** によって生成されています。

> **メモ:** すでにたくさんの他の`INSTALLED_APPS` (`MIDDLEWARE`も同様。設定ファイルのさらに下の方にあります)が存在していることに気づいたでしょう。これらは、[Django administration site](/ja/docs/Learn/Server-side/Django/Admin_site) をサポートすること可能にし、その結果、Django が使用するたくさんの機能(セッション、認証など)をサポートします。

## データベースの指定

これは、プロジェクトで使用するデータベースを特定する場所を指しています。— 開発と本番で動作のわずかな違いを避けるために、可能な限り同じデータベースを使用するのがよいでしょう。様々な[Databases](https://docs.djangoproject.com/en/2.0/ref/settings/#databases) オプションを確認することができます(Django docs)。

この例では、SQLite データベースを使いましょう。なぜなら、デモンストレーションデータベースでは多くの同時アクセスを必要とせず、セットアップ作業に追加の作業が不要だからです。このデータベースがどのように設定されているかは **settings.py** で確認できます。 (詳細は以下にも記載しています):

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

SQLite を使っているので、ここではこれ以上のセットアップは不要です。次へ移りましょう！

## その他のプロジェクト設定

**settings.py** ファイルは、ほかのいくつかの設定の構成にも使用されますが、この時点では [TIME_ZONE](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-TIME_ZONE) を変更するだけでよいでしょう。これは、tz データベースタイムゾーンの標準リストの文字列を同じにする必要があります。（テーブルの TZ 列に必要な値が含まれています） `TIME_ZONE` の値を、あなたのタイムゾーンに適した文字列に変更しましょう。
例を示します:

```python
TIME_ZONE = 'Europe/London'
```

今は変更しないが、次の２つの設定があることに注意してください。

- `SECRET_KEY`. これは、Django のセキュリティ対策の一つとして使用される秘密鍵である。開発中にこのコードを保護していない場合は、運用環境へ配置する際は別のコード(おそらく環境変数かファイルから読み込む)を使う必要があります。
- `DEBUG`. これは、エラー時に HTTP ステータスコードの応答ではなく、デバッグログを表示させます。運用環境では、攻撃者にとって有効なデバッグ情報は `False` にしておくべきです。しかし、今は`True`のままにしておきましょう。

## URL マッパーの接続

Web サイトは、プロジェクトフォルダー内の URL マッパーファイル（urls.py）で作成されます。このファイルを使用してすべての URL マッピングを管理できますが、関連付けられたアプリケーションへマッピングを延ばすのがより一般的です。

**locallibrary/locallibrary/urls.py** を開いて、URL マッパーを使うためのいくつかの方法を記した説明文に注意してください。

```python
"""locallibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

The URL mappings are managed through the `urlpatterns` variable, which is a Python _list_ of `path()` functions. Each `path()` function either associates a URL pattern to a _specific view_, which will be displayed when the pattern is matched, or with another list of URL pattern testing code (in this second case, the pattern becomes the "base URL" for patterns defined in the target module). The `urlpatterns` list initially defines a single function that maps all URLs with the pattern _admin/_ to the module `admin.site.urls` , which contains the Administration application's own URL mapping definitions.

> **メモ:** The route in `path()` is a string defining a URL pattern to match. This string might include a named variable (in angle brackets), e.g. `'catalog/<id>/'`. This pattern will match a URL like **/catalog/**_any_chars_**/** and pass _any_chars_ to the view as a string with parameter name `id`). We discuss path methods and route patterns further in later topics.

Add the lines below to the bottom of the file in order to add a new list item to the `urlpatterns` list. This new item includes a `path()` that forwards requests with the pattern `catalog/` to the module `catalog.urls` (the file with the relative URL **/catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.conf.urls import include
from django.urls import path

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

Now let's redirect the root URL of our site (i.e. `127.0.0.1:8000`) to the URL `127.0.0.1:8000/catalog/`; this is the only app we'll be using in this project, so we might as well. To do this, we'll use a special view function (`RedirectView`), which takes as its first argument the new relative URL to redirect to (`/catalog/`) when the URL pattern specified in the `path()` function is matched (the root URL, in this case).

Add the following lines, again to the bottom of the file:

```python
#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/catalog/')),
]
```

Leave the first parameter of the path function empty to imply '/'. If you write the first parameter as '/' Django will give you the following warning when you start the development server:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django does not serve static files like CSS, JavaScript, and images by default, but it can be useful for the development web server to do so while you're creating your site. As a final addition to this URL mapper, you can enable the serving of static files during development by appending the following lines.

Add the following final block to the bottom of the file now:

```
# Use static() to add url mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> **メモ:** There are a number of ways to extend the `urlpatterns` list (above we just appended a new list item using the `+=` operator to clearly separate the old and new code). We could have instead just included this new pattern-map in the original list definition:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='/catalog/', permanent=True)),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```
>
> In addition, we included the import line (`from django.urls import include`) with the code that uses it (so it is easy to see what we've added), but it is common to include all your import lines at the top of a Python file.

As a final step, create a file inside your catalog folder called **urls.py**, and add the following text to define the (empty) imported `urlpatterns`. This is where we'll add our patterns as we build the application.

```python
from django.urls import path
from . import views


urlpatterns = [

]
```

## ウェブサイトフレームワークのテスト

At this point we have a complete skeleton project. The website doesn't actually _do_ anything yet, but its worth running it to make sure that none of our changes have broken anything.

Before we do that, we should first run a _database migration_. This updates our database to include any models in our installed applications (and removes some build warnings).

### Running database migrations

Django uses an Object-Relational-Mapper (ORM) to map Model definitions in the Django code to the data structure used by the underlying database. As we change our model definitions, Django tracks the changes and can create database migration scripts (in **/locallibrary/catalog/migrations/**) to automatically migrate the underlying data structure in the database to match the model.

When we created the website Django automatically added a number of models for use by the admin section of the site (which we'll look at later). Run the following commands to define tables for those models in the database (make sure you are in the directory that contains **manage.py**):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> **警告:** You'll need to run the above commands every time your models change in a way that will affect the structure of the data that needs to be stored (including both addition and removal of whole models and individual fields).

The `makemigrations` command _creates_ (but does not apply) the migrations for all applications installed in your project (you can specify the application name as well to just run a migration for a single project). This gives you a chance to checkout the code for these migrations before they are applied — when you're a Django expert you may choose to tweak them slightly!

The `migrate` command actually applies the migrations to your database (Django tracks which ones have been added to the current database).

> **メモ:** See [Migrations](https://docs.djangoproject.com/en/2.0/topics/migrations/) (Django docs) for additional information about the lesser-used migration commands.

### Running the website

During development you can test the website by first serving it using the _development web server_, and then viewing it on your local web browser.

> **メモ:** The development web server is not robust or performant enough for production use, but it is a very easy way to get your Django website up and running during development to give it a convenient quick test. By default it will serve the site to your local computer (`http://127.0.0.1:8000/)`, but you can also specify other computers on your network to serve to. For more information see [django-admin and manage.py: runserver](https://docs.djangoproject.com/en/2.0/ref/django-admin/#runserver) (Django docs).

Run the _development web server_ by calling the `runserver` command (in the same directory as **manage.py**):

```bash
python3 manage.py runserver

 Performing system checks...

 System check identified no issues (0 silenced).
 September 22, 2016 - 16:11:26
 Django version 1.10, using settings 'locallibrary.settings'
 Starting development server at http://127.0.0.1:8000/
 Quit the server with CTRL-BREAK.
```

Once the server is running you can view the site by navigating to `http://127.0.0.1:8000/` in your local web browser. You should see a site error page that looks like this:

![Django Debug page for Django 2.0](django_404_debug_page.png)

Don't worry! This error page is expected because we don't have any pages/urls defined in the `catalogs.urls` module (which we're redirected to when we get an URL to the root of the site).

> **メモ:** The above page demonstrates a great Django feature — automated debug logging. An error screen will be displayed with useful information whenever a page cannot be found, or any error is raised by the code. In this case we can see that the URL we've supplied doesn't match any of our URL patterns (as listed). The logging will be turned off during production (when we put the site live on the Web), in which case a less informative but more user-friendly page will be served.

At this point we know that Django is working!

> **メモ:** You should re-run migrations and re-test the site whenever you make significant changes. It doesn't take very long!

## 自分でやってみよう

The **catalog/** directory contains files for the views, models, and other parts of the application. Open these files and inspect the boilerplate.

As you saw above, a URL-mapping for the Admin site has already been added in the project's **urls.py**. Navigate to the admin area in your browser and see what happens (you can infer the correct URL from the mapping above).

## 要約

You have now created a complete skeleton website project, which you can go on to populate with urls, models, views, and templates.

Now the skeleton for the [Local Library website](/ja/docs/Learn/Server-side/Django/Tutorial_local_library_website) is complete and running, it's time to start writing the code that makes this website do what it is supposed to do.

## 参考文献

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/2.0/intro/tutorial01/) (Django docs)
- [Applications](https://docs.djangoproject.com/en/2.0/ref/applications/#configuring-applications) (Django Docs). Contains information on configuring applications.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}
