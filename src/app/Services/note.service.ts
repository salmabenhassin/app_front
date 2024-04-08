import { Note } from '../Models/note.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/envirnoment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(environment.host + "/addNote", note);
  }

  addListNotes(notes: Note[]): Observable<Note[]> {
    return this.http.post<Note[]>(environment.host + "/addListNotes", notes);
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(environment.host + "/getNote/" + id);
  }

  deleteNote(id: number): Observable<void> {
    return this.http.delete<void>(environment.host + "/deleteNote/" + id);
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(environment.host + "/getAllNotes");
  }

  updateNote(id: number, updatedNote: Note): Observable<void> {
    return this.http.put<void>(environment.host + "/updateNote/" + id, updatedNote);
  }

  getNotesByEtudiantClasse(idETD: number, idCLASSE: number): Observable<Note[]> {
    return this.http.get<Note[]>(environment.host + "/getNotesByEtudiantAndClasse/" + idETD + "/" + idCLASSE);
  }
}