# 易娴实验室 / Yixian Lab 网站

中文个人品牌网站，对应公众号《易晓娴·成长实验》，并公布数字产品与政策页面。

联系邮箱：ql373655241@gmail.com

GitHub 仓库：https://github.com/lqingli45-byte/yixian-lab  
公开地址：https://lqingli45-byte.github.io/yixian-lab/

GitHub Pages 从 `main` 分支的网站根目录发布。

## 当前状态

第一款产品 AI Work Log & Review Kit（v1.1）已在网站列出，售价 US$5，一次性购买，不是订阅。预览分支可查看内容、样例和价格。在线购买状态请看商品页。其余三个方向仍为 Planned，没有价格，也没有购买按钮。付费产品压缩包不放在这个公开仓库里。

英文商品页：https://lqingli45-byte.github.io/yixian-lab/product-ai-work-log-review-kit.html  
英文退款政策：https://lqingli45-byte.github.io/yixian-lab/refund-en.html

## 本地查看

```bash
python3 -m http.server 4173
```

打开 http://localhost:4173

## 以后如何更新

1. 改文案编辑对应的 `.html` 文件；改样式编辑 `assets/styles.css`；改标志编辑 `assets/logo.svg`。
2. 内容方向在 `topics.html`，数字产品方向在 `products.html`。增加方向时复制相应卡片。未完成的产品放在未来产品区域。不要编造价格、购买按钮、销量、评价、交付承诺，或尚未发布的文章列表。
3. 如果联系邮箱有变化，请同步修改各页页脚、联系页、法律页和 `site.config.json`。
4. 购买入口从 `site.config.json` 读取。仅在 Dodo 正式支付和 Digital Files 端到端验证通过、且所有者授权后，将 `checkoutEnabled` 改为 `true` 并填写经核对的 Dodo 正式静态购买链接。届时同步更新交付、隐私及退款政策。付费 ZIP 通过 Dodo 私有交付。
5. 更新后把文件推送到仓库 `yixian-lab` 的 `main` 分支。不要改动其他仓库。GitHub Pages 通常几分钟内会更新；更新后请再次打开公开网址确认。

不要把密码、密钥或私人文件放进这个文件夹。
