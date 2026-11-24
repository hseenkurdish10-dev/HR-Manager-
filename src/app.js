import { Printer } from '@capgo/capacitor-printer';

window.printHRReport = async function () {
  const report = document.getElementById('reportResult');

  if (!report || !report.innerHTML.trim()) {
    alert('اعرض التقرير أولاً');
    return;
  }

  const html = `
    <!doctype html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; direction: rtl; padding: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: right; }
        th { background: #eee; }
      </style>
    </head>
    <body>${report.innerHTML}</body>
    </html>
  `;

  try {
    await Printer.printHtml({
      html,
      name: 'HR Attendance Report'
    });
  } catch (error) {
    alert('تعذر فتح الطباعة: ' + (error.message || error));
  }
};
