Tridion-GUI-Extension-Hello-Tab
------------------------
- Adds a new Tab to the Component Edit screen of the GUI
- Uses Tridion 2011 SP1  
- Create a new Folder on the CMS server for the HelloTab GUI Extension.  For example, create the folder here: /Tridion/web/WebUI/Editors/HelloTab 
- Copy all files to the folder above in step 4.
- Add the HelloTab config location to the System.config file in Tridion\web\WebUI\WebRoot\Configuration\System.config.
<editors default="CME">
  ...
  <editor name="HelloTab">
    <!-- DLL Files for DataExtender to be deployed to /Tridion/web/WebUI/WebRoot/bin -->
    <installpath>
     C:\Program Files (x86)\Tridion\web\WebUI\Editors\HelloTab\
    </installpath>
    <configuration>HelloTab.config</configuration>
    <vdir>HelloTab</vdir> <!-- Must be added in IIS -->
  </editor>
</editors>

