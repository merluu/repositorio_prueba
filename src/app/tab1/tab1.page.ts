import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  searchTerm: string = '';
  suggestions: string[] = ['Manzana', 'Banana', 'Cereza', 'Damasco', 'Uva', 'Kiwi'];
  showSuggestions: boolean = false;
  filteredSuggestions: string[] = [];
  showNoResults: boolean = false;


  constructor() {}

  searchItems() {
    // Aquí puedes realizar la lógica de búsqueda y filtrar los elementos según 'searchTerm'
    // Por ejemplo, puedes actualizar una lista de elementos que coincidan con la búsqueda.
    // this.filteredItems = this.items.filter(item => item.includes(this.searchTerm));
  }

  updateSuggestions() {
    const lowercaseSearchTerm = this.searchTerm.toLowerCase();
    this.filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(lowercaseSearchTerm)
    );
  
    // Mostrar "No hay resultados" si no se encuentran sugerencias
    this.showNoResults = this.filteredSuggestions.length === 0;
  
    // Mostrar sugerencias en tiempo real a medida que el usuario escribe
    this.showSuggestions = this.searchTerm !== '';
  }


  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.showSuggestions = false;
    this.showNoResults = false;
  }

}
