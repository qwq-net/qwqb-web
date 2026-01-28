---
title: "Markdown Syntax Guide"
description: "Astroで使用可能なMarkdown記法の網羅的なテストページです。見出し、リスト、コードブロック、テーブルなどの表示確認に使用します。"
pubDate: "Jan 28 2026"
heroImage: "../../assets/placeholder.jpg"
tags: ["Blog"]
---

このページでは、Astroでサポートされている基本的なMarkdown記法をテストします。

## 見出し (Headings)

# H1 見出し

## H2 見出し

### H3 見出し

#### H4 見出し

##### H5 見出し

###### H6 見出し

## テキスト装飾 (Text Formatting)

基本的なテキストスタイルです。

- **太字 (Bold)** または **太字**
- _斜体 (Italic)_ または _斜体_
- **_太字かつ斜体_**
- ~~取り消し線 (Strikethrough)~~
- `インラインコード (Inline Code)`

## パラグラフ (Paragraphs)

これは通常のパラグラフです。テキストは適切に折り返され、読みやすくなっているはずです。

空行を入れることで新しい段落になります。

## リスト (Lists)

### 番号なしリスト (Unordered List)

- アイテム 1
- アイテム 2
- アイテム 3
  - ネストされたアイテム 3.1
  - ネストされたアイテム 3.2
    - さらにネスト 3.2.1

### 番号付きリスト (Ordered List)

1. 第一項
2. 第二項
3. 第三項
   1. ネストされた項 1
   2. ネストされた項 2

### タスクリスト (Task List)

- [x] 完了したタスク
- [ ] 未完了のタスク
- [ ] これからやるタスク

## 引用 (Blockquotes)

> これは引用ブロックです。
> 複数行にわたって記述することができます。
>
> > これはネストされた引用です。

## コードブロック (Code Blocks)

シンタックスハイライトはShikiによって処理されます。

```javascript
// JavaScript Example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Astro User");
```

```css
/* CSS Example */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```html
<!-- HTML Example -->
<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

## リンクと画像 (Links & Images)

これは [Astroの公式サイト](https://astro.build) へのリンクです。

### 画像埋め込み

![プレースホルダー画像](../../assets/placeholder.jpg)

## テーブル (Tables)

GFM (GitHub Flavored Markdown) スタイルのテーブルです。

| 左揃え     |  中央揃え  |     右揃え |
| :--------- | :--------: | ---------: |
| コンテンツ | コンテンツ | コンテンツ |
| 配列       |    配列    |       配列 |
| `Key`      |  `Value`   |        100 |

## 水平線 (Horizontal Rules)

以下は水平線です。

---

## その他 (Others)

### 定義リスト (HTMLタグ使用)

<dl>
  <dt>Markdown</dt>
  <dd>軽量マークアップ言語。</dd>
  <dt>Astro</dt>
  <dd>Webサイトを構築するためのWebフレームワーク。</dd>
</dl>

### 詳細折りたたみ (Details/Summary)

<details>
<summary>クリックして詳細を表示</summary>

ここに隠された詳細情報が表示されます。Markdown記法も _中_ で使えます。

</details>
