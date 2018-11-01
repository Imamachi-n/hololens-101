# 概要

Hololens Academy で紹介されている内容について、自分自身が理解した内容などを書いていきます。

# Github for Unity

[Github for Unity を導入してみる](http://tech.guitarrapc.com/entry/2017/07/14/031046#Github-for-Unity-%E3%82%92%E7%94%A8%E3%81%84%E3%81%A6%E3%81%BF%E3%82%8B)

# トラブルシューティング

## WiFi 経由で Visual Studio から Hololens へアプリをデプロイする

Hololens のデバイスポータルが ON になっていることを確認し、Hololens 側で PIN コードを表示させておく。  
Visual Studio 側で Release、x86、リモートコンピュータを選択し、`デバックなしで開始`を実行する。  
すると、PIN コードの入力を求められるので、Hololens 側で生成したおいた PIN コードを入力する。

## Hololens のデバイスポータルをリセットしたい

Hololens 上で、以下の URL にアクセスする。

```
https://[HololensのIPアドレス]/devicepair.htm
```

PIN コードが表示されるので、それをメモした後 Bloom のジェスチャーを行う。  
上記で開いたページに PIN コードの入力と、新しいユーザ・パスワードを求められる。

#### 参考

[https://forums.hololens.com/discussion/7728/windows-device-portal-username-password-reset](https://forums.hololens.com/discussion/7728/windows-device-portal-username-password-reset)

## Visual Studio 上でアプリをデプロイができない

- DLL の一部が足りないなどのエラーが出た場合、ファイルパスが長すぎてデプロイができない可能性あり。プロジェクト名を短くしてデプロイし直す。

#### 参考

[https://github.com/VulcanTechnologies/HoloLensCameraStream/issues/31](https://github.com/VulcanTechnologies/HoloLensCameraStream/issues/31)
