/**
 * Basic response for API requests
 */
export interface BasicResponse {
  status: number;
  message?: string;
}

export interface NewsResponse extends BasicResponse {
  articles?: any[];
  meta?: {
    totalPages: number;
    currentPage: number;
    documentsPerPage: number;
    totalDocuments: number;
  };
}
