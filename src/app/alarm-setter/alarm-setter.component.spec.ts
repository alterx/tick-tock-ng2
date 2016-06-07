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
import { AlarmSetterComponent } from './alarm-setter.component';

describe('Component: AlarmSetter', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AlarmSetterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AlarmSetterComponent],
      (component: AlarmSetterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AlarmSetterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AlarmSetterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-alarm-setter></app-alarm-setter>
  `,
  directives: [AlarmSetterComponent]
})
class AlarmSetterComponentTestController {
}

