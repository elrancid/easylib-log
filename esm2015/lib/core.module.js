import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreComponent } from './core.component';
import { EnsureImportedOnceModule } from './ensure-imported-once.module';
export class CoreModule extends EnsureImportedOnceModule {
    // Stop the other modules from importing the core module.
    constructor(module) {
        super(module);
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CoreComponent],
                imports: [],
                exports: [CoreComponent]
            },] }
];
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvZWFzeWxpYi9jb3JlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVXpFLE1BQU0sT0FBTyxVQUFXLFNBQVEsd0JBQXdCO0lBQ3RELHlEQUF5RDtJQUN6RCxZQUFvQyxNQUFrQjtRQUNwRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7O1lBVkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ3pCOzs7WUFHNkMsVUFBVSx1QkFBekMsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbnN1cmVJbXBvcnRlZE9uY2VNb2R1bGUgfSBmcm9tICcuL2Vuc3VyZS1pbXBvcnRlZC1vbmNlLm1vZHVsZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb3JlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbQ29yZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSBleHRlbmRzIEVuc3VyZUltcG9ydGVkT25jZU1vZHVsZSB7XG4gIC8vIFN0b3AgdGhlIG90aGVyIG1vZHVsZXMgZnJvbSBpbXBvcnRpbmcgdGhlIGNvcmUgbW9kdWxlLlxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBtb2R1bGU6IENvcmVNb2R1bGUgKSB7XG4gICAgc3VwZXIobW9kdWxlKTtcbiAgfVxufVxuIl19