//This file will contain the TypeScript type declarations for the functions in crud.js.
import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;

export function deleteRow(RowID: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;
