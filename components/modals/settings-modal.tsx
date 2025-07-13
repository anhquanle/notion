"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useSettings } from "@/hooks/use-settings";

import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <>
      <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
        <DialogContent>
          <DialogTitle className="border-b pb-3 text-lg font-medium">
            My settings
          </DialogTitle>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1">
              <Label>Appearance</Label>
              <span className="text-[0.8rem] text-muted-foreground">
                Customize how Notion looks on your device
              </span>
            </div>
            <ModeToggle />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
