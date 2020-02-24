import Page from './page'

class MyAccount extends Page {

    /**
    * define elements
    */

    get logoImg () { return $(`[src=\'http://www.kitcarsonhomeandmuseum.com/wp-content/uploads/2014/09/logo-small-white.png\']`); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('http://www.kitcarsonmuseum.org/')       //this will append `contact-us` to the baseUrl to form complete URL
    }
}

export default new MyAccount()
