BackgroundImage(){
	
} // End of BackgroundImage

Fill(){
	RGBA(255, 255, 255, 1)
} // End of Fill

ImagePosition(){
	ImagePosition.Fit
} // End of ImagePosition

Height(){
	Max(App.Height, App.DesignHeight)
} // End of Height

Width(){
	Max(App.Width, App.DesignWidth)
} // End of Width

Size(){
	1 + CountRows(App.SizeBreakpoints) - CountIf(App.SizeBreakpoints, Value >= ConfigScreen.Width)
} // End of Size

Orientation(){
	If(ConfigScreen.Width < ConfigScreen.Height, Layout.Vertical, Layout.Horizontal)
} // End of Orientation

LoadingSpinner(){
	LoadingSpinner.None
} // End of LoadingSpinner

LoadingSpinnerColor(){
	RGBA(56, 96, 178, 1)
} // End of LoadingSpinnerColor

OnVisible(){
	
} // End of OnVisible

