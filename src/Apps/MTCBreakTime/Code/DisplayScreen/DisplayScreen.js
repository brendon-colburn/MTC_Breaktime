BackgroundImage(){
	
} // End of BackgroundImage

LoadingSpinner(){
	LoadingSpinner.None
} // End of LoadingSpinner

Width(){
	Max(App.Width, App.DesignWidth)
} // End of Width

Height(){
	Max(App.Height, App.DesignHeight)
} // End of Height

ImagePosition(){
	ImagePosition.Center
} // End of ImagePosition

LoadingSpinnerColor(){
	RGBA(56, 96, 178, 1)
} // End of LoadingSpinnerColor

Fill(){
	RGBA(255, 255, 255, 1)
} // End of Fill

Size(){
	1 + CountRows(App.SizeBreakpoints) - CountIf(App.SizeBreakpoints, Value >= DisplayScreen.Width)
} // End of Size

Orientation(){
	If(DisplayScreen.Width < DisplayScreen.Height, Layout.Vertical, Layout.Horizontal)
} // End of Orientation

OnVisible(){
	
} // End of OnVisible

