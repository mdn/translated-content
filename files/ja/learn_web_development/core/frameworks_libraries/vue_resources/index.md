---
title: Vue resources
slug: Learn_web_development/Core/Frameworks_libraries/Vue_resources
l10n:
  sourceCommit: 5340aace9b48dc6f885fca3a90d03e7637cd0cb0
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

ここで、学習をさらに進めるために使用できるリソースのリストと、その他の役立つヒントを示して、Vueの紹介をします。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <p>
          最低限、主要な
          <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> と
          <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
          <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          を扱うことができ、
          <a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >端末/コマンドライン</a
          >に関する知識があることが推奨されます。
        </p>
        <p>
          Vueコンポーネントは、アプリのデータを管理するJavaScriptオブジェクトと、基盤となるDOM構造にマッピングするHTMLベースのテンプレート構文の組み合わせとして記述されます。インストール、およびVueのより高度な機能（単一ファイルコンポーネントやレンダリング関数など）を使用するには、Node.jsとnpmがインストールされたターミナルが必要です。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn where to go to find further information on Vue, to continue
        your learning。
      </td>
    </tr>
  </tbody>
</table>

## Further resources

Here's where you should go to learn more about Vue:

- [Vue Docs](https://vuejs.org/) — The main Vue site. Contains comprehensive documentation, including examples, cookbooks, and reference material. This is the best place to start learning Vue in depth。
- [Vue GitHub Repo](https://github.com/vuejs/vue) — The Vue code itself. This is where you can report issues and/or contribute directly to the Vue codebase. Studying the Vue source code can help you better understand how the framework works, and write better code。
- [Vue Discussions](https://github.com/vuejs/core/discussions) — The official forum for getting help with Vue。
- [Vue CLI Docs](https://cli.vuejs.org/) — Documentation for the Vue CLI. This contains information on customizing and extending the output you are generating via the CLI。
- [Nuxt](https://nuxt.com/) — Nuxt is a Server-Side Vue Framework, with some architectural opinions that can be useful to creating maintainable applications, even if you don't use any of the Server Side Rendering features it provides. This site provides detailed documentation on using Nuxt。
- [Vue Mastery](https://www.vuemastery.com/courses/) — A paid education platform that specializes in Vue, including some free lessons。
- [Vue School](https://vueschool.io/) — Another paid education platform specializing in Vue。

## Building and publishing your Vue app

The Vue CLI also provides us with tools for preparing our app for publishing to the web. You can do this like so:

- If your local server is still running, end it by pressing <kbd>Ctrl</kbd> \+ <kbd>C</kbd> in the terminal。

- Next, run the `npm run build` (or `yarn build`) in the console。

This will create a new `dist` directory containing all of your production ready files. To publish your site to the web, copy the contents of this folder to your hosting environment。

> [!NOTE]
> The Vue CLI docs also include a [specific guide on how to publish your app](https://cli.vuejs.org/guide/deployment.html#platform-guides) to many of the common hosting platforms。

## Vue 2

Vue 2 support will end on December 31st, 2023 and the default Vue version for all CLI tools will be version 3 and above。
The [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) works as an alternative to the property-based API where a `setup()` function is used on the component. Only what you return from this function is available in your `<template>`s. You are required to be explicit about "reactive" properties when using this API. Vue handles this for you using the [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs). This makes the new API typically considered a more advanced use case。

If you're upgrading from Vue 2, it's recommended you take a look at the [Vue 3 migration guide](https://v3-migration.vuejs.org/)。

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
