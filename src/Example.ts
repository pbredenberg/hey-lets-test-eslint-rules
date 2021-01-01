export default class Example {

   // Pass
   public static keep_doing_nothing = true;

   // Pass
   private _heyThereFella = true;

   // Fail
   // ====
   // Method name doNothing must match one of the following formats:
   // snake_case eslint@typescript-eslint/naming-convention
   public static doNothing(): boolean {
      return Example._doNothing();
   }

   // Pass
   public static still_do_nothing(): boolean {
      return Example._doNothing();
   }

   // Pass
   public static do_something(): boolean {
      return Example._do_something();
   }

   // Pass
   private static _do_something(): boolean {
      return true;
   }

   // Fail
   // ====
   // Method name do_something_else must have a leading
   // underscore eslint@typescript-eslint/naming-convention
   private static do_something_else(): boolean {
      return true;
   }

   // Pass
   private static _doNothing(): boolean {
      return true;
   }

   // Pass
   public isDoingSomething(): boolean {
      return this._heyThereFella;
   }
}
