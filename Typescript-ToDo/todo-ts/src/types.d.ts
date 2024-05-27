// Tüm type 'ları burada toplayıp burdan erişim sağlayabiliyoruz 

interface ITodoType {
    task: string;
    isDone: boolean;
    id: number | string;
    todo?: string; // burası zorunlu değil varsa type string
  }