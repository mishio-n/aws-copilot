---
theme: bricks
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
defaults:
  foo: true
transition: slide-left
title: AWS Copilot
mdc: true
monaco: true
monacoTypesSource: cdn
download: true
---

# AWS Copilot

---

# What is AWS Copilot ?

copilotと言えば、生成AI?

AWS上でのコンテナアプリケーションの実行・管理を素早く簡単に行うことができるCLIツール

https://aws.amazon.com/jp/containers/copilot/


<img src="/aws-copilot.png" class="px-10 py-2" />

---

# Container Application on AWS

そもそも、どういう選択肢があるんでしょうか？

- Docker on EC2

<Underline>→ できなくはないが限りなくナシ</Underline>

- Lambda（コンテナランタイム）

<Underline>→ アプリケーションというより関数</Underline>

- ECS
- EKS
- App Runner

<Underline :isImportant=true>→ マネージドな選択肢ならこのどれか</Underline>

---

# App Runner vs ECS vs EKS

## App Runner

## ECS

AWSの提供するコンテナオーケストレーションサービス。  
EKSと役割はほぼ同じだが、AWS環境に限定される。

## EKS

コンテナというよりKubernetes。  
KubernetesがやりたいならEKS一択になるが、できることはECSと変わらない。  
**Kubernetes**という巨大なエコシステムに乗っかることで色々恩恵を受けられる反面、  
Kubernetesのアップデート（4ヶ月に1回）への対応やマニフェストの理解が必要になる。