---
publish: true
created: 2025-07-28T01:43
modified: 2025-11-22T12:51:59-05:00
tags:
  - certificado
  - capacitacion
cssclasses: ""
---




```dataviewjs
const folder = "Curriculo_Vitae/Certifications_Documents"

const pdfs = app.vault.getFiles()
  .filter(f => f.path.startsWith(folder) && f.extension === "pdf")

for (const pdf of pdfs) {
  const name = pdf.name.replace(".pdf", "")
  dv.header(3, name)
  dv.paragraph(`![[${pdf.name}]]`)
}
```
