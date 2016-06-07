import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ConfigurationWidgetComponent } from './configuration-widget.component';

describe('Component: ConfigurationWidget', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ConfigurationWidgetComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ConfigurationWidgetComponent],
      (component: ConfigurationWidgetComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ConfigurationWidgetComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ConfigurationWidgetComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-configuration-widget></app-configuration-widget>
  `,
  directives: [ConfigurationWidgetComponent]
})
class ConfigurationWidgetComponentTestController {
}

